import { Skills } from './content'
import { useControlsContext } from './controls'

type SkillsArr = Skills[]
type ItemWithSkills = Record<string, unknown>
type SelectSkills<T extends ItemWithSkills> = (item: T) => SkillsArr

export const filterSkill = <T extends ItemWithSkills>(
  itemWithSkills: T,
  filterText: string | null,
  selectSkills: SelectSkills<T>
) => {
  if (!filterText) return true

  const skills = selectSkills(itemWithSkills)

  const hasSkillMatch = (skill: Skills) =>
    skill.toLowerCase().includes(filterText!.toLowerCase())

  if (skills.some(hasSkillMatch)) return true
  return false
}

const defaultSelectSkills = item => item.skills as SkillsArr

export function useFilterSkills<T extends ItemWithSkills>(
  itemsWithSkills: T[],
  selectSkills: (item: T) => SkillsArr = defaultSelectSkills
) {
  const controls = useControlsContext()

  return itemsWithSkills.filter(item =>
    filterSkill(item, controls.skillsFilter, selectSkills)
  )
}
