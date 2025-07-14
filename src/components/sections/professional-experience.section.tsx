import { Briefcase } from 'lucide-react'
import { useState } from 'react'
import { Exhaustive, professionalExperience } from '../../content'
import { useControlsContext } from '../../controls'
import { ToggleControl } from '../../controls/toggle-control.component'
import { useFilterExhaustive } from '../../use-filter-exhaustive.hook'
import { useFilterSkills } from '../../use-filter-skills.hook'
import { NodeList } from '../node-list'
import { SkillList } from '../skill-list.component'

export function ProfessionalExperience() {
  const controls = useControlsContext()
  const [showSkills, setShowSkills] = useState(true)
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
        <ToggleControl
          id='show-professional-skills'
          label='skills'
          checked={showSkills}
          onCheckedChange={checked => setShowSkills(checked)}
        />
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
              {showSkills && <SkillList skills={pE.skills} />}
            </div>
          </div>
        )
      })}
    </div>
  )
}
