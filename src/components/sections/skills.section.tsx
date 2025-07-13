import { ReactNode } from 'react'
import { SkillDetail, skills, Exhaustive } from '../../content'
import { useFilterSkills } from '../../use-filter-skills.hook'
import { useFilterExhaustive } from '../../use-filter-exhaustive.hook'

const selectSkill = (item: SkillDetail) => [item.text]
const selectVerbose = (item: SkillDetail) => item.exhaustive || null

function SkillGroup({
  skills,
  heading,
}: {
  skills: SkillDetail[]
  heading: ReactNode
}) {
  const filteredSkills = useFilterSkills(
    useFilterExhaustive(skills, selectVerbose),
    selectSkill
  )
  return !filteredSkills.length ? null : (
    <div className='skill-group'>
      <h3>{heading}</h3>
      <ul>
        {filteredSkills.map(skill => (
          <li key={skill.text}>
            <span className={skill.expert && 'bold'}>{skill.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  return (
    <div className='list'>
      <h2>Skills</h2>
      {Object.entries(skills).map(([key, skills]) => (
        <SkillGroup key={key} heading={key} skills={skills} />
      ))}
    </div>
  )
}
