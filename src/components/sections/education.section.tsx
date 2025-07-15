import { ToggleControl } from '@/components/controls'
import { useFilterSkills } from '@/components/utils'
import { SkillList } from '@/components/utils/skill-list.component'
import { education } from '@/content'
import { GraduationCap } from 'lucide-react'
import { useState } from 'react'

export function Education() {
  const [showSkills, setShowSkills] = useState(false)
  const filteredEducation = useFilterSkills(
    education,
    content => content.skills || []
  )
  return (
    <div className='segment' data-segment='education'>
      <div className='section-group'>
        <h2>Education</h2>
      </div>
      <div className='icon-decoration'>
        <div className='headings'>
          <GraduationCap size={20} />
        </div>
        <ToggleControl
          id='show-education-skills'
          label='skills'
          checked={showSkills}
          onCheckedChange={checked => setShowSkills(checked)}
        />
      </div>
      {filteredEducation.map((edu, index) => (
        <div className='section decorated' key={index}>
          <div className='headings'>
            <h3 className='dot'>
              <span>{edu.period.from}</span>
              {edu.period.to && (
                <>
                  &mdash;
                  <span>{edu.period.to}</span>
                </>
              )}
            </h3>
          </div>
          <div className='details'>
            {edu.qualifications.map((qual, idx) => (
              <h4 key={idx}>{qual.text}</h4>
            ))}
            <p className='establishment'>{edu.establishment}</p>
            {showSkills && (
              <SkillList skills={edu.skills?.map(skill => ({ text: skill }))} />
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
