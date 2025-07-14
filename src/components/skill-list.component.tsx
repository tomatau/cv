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
    controls.skillsFilter?.length
      ? controls.skillsFilter?.some(sF =>
          skill.text.toLowerCase().includes(sF.toLowerCase())
        )
      : true
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
