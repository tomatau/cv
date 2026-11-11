import { professionalExperience } from './professional-experience.content'
import { Period } from './types'

type MonthRange = [from: number, to: number]

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

function monthIndex(date: string): number {
  const [month, year] = date.split(' ')
  const monthNumber = MONTHS.indexOf(month)
  if (monthNumber < 0 || !Number(year)) {
    throw new Error(`Cannot parse period date "${date}"`)
  }
  return Number(year) * 12 + monthNumber
}

function currentMonthIndex(): number {
  const now = new Date()
  return now.getFullYear() * 12 + now.getMonth()
}

function monthRange(period: Period): MonthRange {
  const lastMonth = period.to ? monthIndex(period.to) : currentMonthIndex()
  return [monthIndex(period.from), lastMonth + 1]
}

function periodOf(id: string): Period {
  const experience = professionalExperience.find(exp => exp.id === id)
  if (!experience) throw new Error(`Unknown experience id "${id}"`)
  return experience.period
}

function mergeOverlaps(ranges: MonthRange[]): MonthRange[] {
  const sorted = [...ranges].sort((a, b) => a[0] - b[0])
  return sorted.reduce<MonthRange[]>((merged, [from, to]) => {
    const last = merged.at(-1)
    if (last && from <= last[1]) last[1] = Math.max(last[1], to)
    else merged.push([from, to])
    return merged
  }, [])
}

/** Whole years worked across the given roles, counting overlapping time once. */
export function yearsAcross(ids: string[]): number {
  const ranges = mergeOverlaps(ids.map(id => monthRange(periodOf(id))))
  const months = ranges.reduce((total, [from, to]) => total + to - from, 0)
  return Math.floor(months / 12)
}

/** Whole years from the start of the given role until today. */
export function yearsSince(id: string): number {
  const [from] = monthRange(periodOf(id))
  return Math.floor((currentMonthIndex() - from) / 12)
}

/** Formats a year count for prose, such as "1 year" or "4 years". */
export function formatYears(count: number): string {
  return `${count} ${count === 1 ? 'year' : 'years'}`
}
