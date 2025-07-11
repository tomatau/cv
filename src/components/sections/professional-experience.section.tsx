import { Briefcase } from 'lucide-react'
import { professionalExperience } from '../../content'
import { NodeList } from '../node-list'

export function ProfessionalExperience() {
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
      {professionalExperience.map((pE, idx) => {
        const showDetailedResponsibilities = idx < 2
        return (
          <div className='section decorated' key={pE.establishment.name}>
            <div className='headings'>
              <h3 className='with-dot'>
                {pE.period.start}
                <br />
                &mdash;
                <br />
                {pE.period.end}
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
              <ul className='inline-list'>
                {pE.skills.map(skill => (
                  <li key={skill.text}>
                    <span className='skill'>{skill.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
