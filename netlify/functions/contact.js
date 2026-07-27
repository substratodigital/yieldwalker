const DEST_EMAIL = 'miguel@yieldwalker.com'
const FROM_EMAIL = 'Yieldwalker <hello@yieldwalker.com>'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
}

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'method_not_allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } })
  }

  let data
  try {
    data = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: 'invalid_json' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const { nome, email, empresa, area, servico, info, website } = data || {}

  // honeypot: campo invisível que só bots preenchem
  if (website) {
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
  }

  if (!nome || !email || !empresa || !area || !servico) {
    return new Response(JSON.stringify({ error: 'missing_fields' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }
  if (!EMAIL_RE.test(email)) {
    return new Response(JSON.stringify({ error: 'invalid_email' }), { status: 400, headers: { 'Content-Type': 'application/json' } })
  }

  const html = `
    <h2>Novo contato pelo site</h2>
    <p><strong>Nome:</strong> ${escapeHtml(nome)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Empresa:</strong> ${escapeHtml(empresa)}</p>
    <p><strong>Área da empresa:</strong> ${escapeHtml(area)}</p>
    <p><strong>Tipo de serviço:</strong> ${escapeHtml(servico)}</p>
    <p><strong>Informação adicional:</strong><br>${escapeHtml(info || '-').replace(/\n/g, '<br>')}</p>
  `.trim()

  const resendRes = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: DEST_EMAIL,
      reply_to: email,
      subject: `[FormSite] Novo contato: ${nome} (${empresa})`,
      html,
    }),
  })

  if (!resendRes.ok) {
    console.error('Resend error', resendRes.status, await resendRes.text())
    return new Response(JSON.stringify({ error: 'send_failed' }), { status: 502, headers: { 'Content-Type': 'application/json' } })
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } })
}
