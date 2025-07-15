import { useControlsContext } from '@/components/controls'
import { Skills } from '@/content'

type SkillsArr = Skills[]
type ItemWithSkills = Record<string, unknown>
type SelectSkills<T extends ItemWithSkills> = (item: T) => SkillsArr

export const filterSkill = <T extends ItemWithSkills>(
  itemWithSkills: T,
  skillFilters: string[] | null,
  selectSkills: SelectSkills<T>
) => {
  if (!skillFilters || !skillFilters.length) return true

  const skills = selectSkills(itemWithSkills)

  const hasSkillMatch = (skill: Skills) =>
    skillFilters.some(sF => skill.toLowerCase().includes(sF!.toLowerCase()))

  if (skills.some(hasSkillMatch)) return true
  return false
}

const defaultSelectSkills = (item: ItemWithSkills) => item.skills as SkillsArr

export function useFilterSkills<T extends ItemWithSkills>(
  itemsWithSkills: T[],
  selectSkills: (item: T) => SkillsArr = defaultSelectSkills
) {
  const controls = useControlsContext()

  return itemsWithSkills.filter(item =>
    filterSkill(item, controls.skillsFilter, selectSkills)
  )
}
