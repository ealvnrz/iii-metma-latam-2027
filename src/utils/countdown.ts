// Resolve a calendar date in the conference zone, independent of the visitor's zone.
export function zonedMidnight(date: string, timeZone: string): number {
  const [year, month, day] = date.split('-').map(Number);
  const wallTime = Date.UTC(year, month - 1, day);
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23',
  });
  let instant = wallTime;
  for (let attempt = 0; attempt < 3; attempt++) {
    const parts = Object.fromEntries(formatter.formatToParts(instant).map(({ type, value }) => [type, value]));
    const rendered = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute, +parts.second);
    const adjustment = wallTime - rendered;
    instant += adjustment;
    if (!adjustment) break;
  }
  return instant;
}

export function countdownState(now: number, start: number, end: number) {
  const remaining = Math.max(0, Math.ceil((start - now) / 1000));
  return {
    phase: now < start ? 'upcoming' : now < end ? 'ongoing' : 'finished',
    days: Math.floor(remaining / 86400),
    hours: Math.floor((remaining % 86400) / 3600),
    minutes: Math.floor((remaining % 3600) / 60),
    seconds: remaining % 60,
  };
}
