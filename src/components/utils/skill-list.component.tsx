import { useControlsContext } from '@/components/controls'
import { useFilterExhaustive } from '@/components/utils'
import { SkillDetail } from '@/content'

export function SkillList({
  skills = [],
  showAll = false,
}: {
  skills: SkillDetail[] | undefined
  showAll?: boolean
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
      {(showAll ? skills : filteredSkills).map(skill => (
        <li key={skill.text}>
          <span className='skill'>{skill.text}</span>
        </li>
      ))}
    </ul>
  )
}
