import { SkillDetail } from '../content'
import { useControlsContext } from '../controls'
import { useFilterExhaustive } from '../use-filter-exhaustive.hook'

export function SkillList({
  skills = [],
}: {
  skills: SkillDetail[] | undefined
}) {
  const controls = useControlsContext()
  const filteredExhaustive = useFilterExhaustive(skills)
  const filteredSkills = filteredExhaustive.filter(skill =>
    skill.text
      .toLowerCase()
      .includes(controls.skillsFilter?.toLowerCase() || '')
  )
  return (
    <ul className='inline-list'>
      {filteredSkills.map(skill => (
        <li key={skill.text}>
          <span className='skill'>{skill.text}</span>
        </li>
      ))}
    </ul>
  )
}
