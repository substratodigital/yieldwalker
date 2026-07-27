// PT: Brasil e Portugal. ES: Espanha + América Latina de língua espanhola.
// Qualquer outro país cai no inglês. Tudo na mesma página (SPA), sem redirecionamento.
const PT_COUNTRIES = new Set(['BR', 'PT'])
const ES_COUNTRIES = new Set([
  'ES', 'MX', 'AR', 'CO', 'CL', 'PE', 'VE', 'EC', 'GT', 'CU', 'BO',
  'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR',
])

export default {
  async fetch(request) {
    const cookie = request.headers.get('cookie') || ''
    const response = await fetch(request)

    if (/(?:^|;\s*)yw-lang-explicit=1/.test(cookie)) {
      // Visitante já escolheu o idioma manualmente antes — nunca sobrepor.
      return response
    }

    const country = request.cf?.country || ''
    const lang = PT_COUNTRIES.has(country) ? 'pt' : ES_COUNTRIES.has(country) ? 'es' : 'en'

    const newResponse = new Response(response.body, response)
    newResponse.headers.append('Set-Cookie', `yw-lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`)
    return newResponse
  },
}
