import { getStore } from '@netlify/blobs'
import { record, isBot } from '../lib/counter.js'

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } })

export default async (req) => {
  if (req.method !== 'POST') return json({ error: 'method_not_allowed' }, 405)
  if (isBot(req.headers.get('user-agent'))) return json({ ok: true })

  let data
  try {
    data = await req.json()
  } catch {
    return json({ error: 'invalid_json' }, 400)
  }

  const ok = await record(getStore('artigo-stats'), { event: data?.e, unique: data?.u === true })
  return json(ok ? { ok: true } : { error: 'invalid_event' }, ok ? 200 : 400)
}
