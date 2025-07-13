import { Briefcase } from 'lucide-react'
import { professionalExperience, Exhaustive, SkillDetail } from '../../content'
import { useControlsContext } from '../../controls'
import { useFilterSkills } from '../../use-filter-skills.hook'
import { NodeList } from '../node-list'
import { useFilterExhaustive } from '../../use-filter-exhaustive.hook'

function SkillList({ skills }: { skills: SkillDetail[] }) {
  const filteredSkills = useFilterExhaustive(skills)
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

export function ProfessionalExperience() {
  const controls = useControlsContext()
  const filteredBySkills = useFilterSkills(professionalExperience, item =>
    item.skills.map(skillD => skillD.text)
  )
  const filteredExhaustive = useFilterExhaustive(filteredBySkills)
  return (
    <div className='segment' data-segment='professional-experience'>
      <div className='section-group'>
        <h2>Professional Experience</h2>
      </div>
      <div className='icon-decoration'>
        <div className='headings'>
          <Briefcase size={20} />
        </div>
      </div>
      {filteredExhaustive.map((pE, idx) => {
        const showDetailedResponsibilities =
          controls.exhaustive === Exhaustive.exhaustive || idx < 2
        return (
          <div className='section decorated' key={pE.establishment.name}>
            <div className='headings'>
              <h3 className='with-dot'>
                {pE.period.from}
                <br />
                &mdash;
                <br />
                {pE.period.to}
              </h3>
            </div>
            <div className='details'>
              <h4>{pE.role}</h4>
              <p className='establishment'>
                <span className='establishment-name'>
                  {pE.establishment.name}
                </span>
                &raquo;
                <span className='establishment-location'>
                  {pE.establishment.location}
                </span>
                {pE.establishment.size && (
                  <>
                    &raquo;
                    <span className='establishment-size'>
                      {pE.establishment.size}
                    </span>
                  </>
                )}
              </p>
              {showDetailedResponsibilities && (
                <NodeList list={pE.responsibilities} />
              )}
              <SkillList skills={pE.skills} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
