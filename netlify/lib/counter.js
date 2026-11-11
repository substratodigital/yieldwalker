export const EVENTS = ['view', 'open', 'download']
const BOT_RE = /bot|crawl|spider|slurp|preview|facebookexternalhit|headless|lighthouse|monitor/i

export function dayKey(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo' }).format(date)
}

export function isBot(userAgent) {
  return !userAgent || BOT_RE.test(userAgent)
}

export async function record(store, { event, unique }, date = new Date()) {
  if (!EVENTS.includes(event)) return false
  const key = `day:${dayKey(date)}`
  const day = (await store.get(key, { type: 'json' })) || { view: 0, open: 0, download: 0, visitors: 0 }
  day[event] += 1
  if (event === 'view' && unique) day.visitors += 1
  await store.setJSON(key, day)
  return true
}

export async function summary(store, days = 7, date = new Date()) {
  const rows = []
  for (let i = 0; i < days; i++) {
    const day = dayKey(new Date(date.getTime() - i * 86400000))
    const data = (await store.get(`day:${day}`, { type: 'json' })) || { view: 0, open: 0, download: 0, visitors: 0 }
    rows.push({ day, ...data })
  }
  return rows
}
