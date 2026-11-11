import { getStore } from '@netlify/blobs'
import { summary } from '../lib/counter.js'

export default async (req) => {
  const secret = process.env.STATS_KEY
  const key = new URL(req.url).searchParams.get('key')
  if (!secret || key !== secret) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } })
  }
  const rows = await summary(getStore('artigo-stats'), 7)
  return new Response(JSON.stringify({ rows }), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } })
}
