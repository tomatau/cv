import { skills } from '../../content'

export function Skills() {
  return (
    <div className='list'>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill.text}>{skill.text}</li>
        ))}
      </ul>
    </div>
  )
}
