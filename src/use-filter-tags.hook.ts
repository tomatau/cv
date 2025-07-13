import { Tags, Exhaustive } from './content'
import { useControlsContext } from './controls'
import { filterSkill } from './use-filter-skills.hook'
import { filterVerbose } from './use-filter-exhaustive.hook'

type ContentWithTags<T> = { tags?: Tags } & T

export function useFilterTags<T>(contentWithTags: ContentWithTags<T>[]) {
  const controls = useControlsContext()

  const selectExhaustive = (item: ContentWithTags<T>) =>
    item.tags?.find(tag => tag === Exhaustive.exhaustive) || null

  const exhaustiveFilter = (item: ContentWithTags<T>) =>
    filterVerbose(item, controls.exhaustive, selectExhaustive)

  const selectSkills = (item: ContentWithTags<T>) => item.tags || []

  const skillsFilter = (item: ContentWithTags<T>) =>
    filterSkill(item, controls.skillsFilter, selectSkills)

  return contentWithTags.filter(exhaustiveFilter).filter(skillsFilter)
}
