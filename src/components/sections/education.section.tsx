import { GraduationCap } from 'lucide-react'
import { education } from '../../content'

export function Education() {
  return (
    <div className='segment' data-segment='education'>
      <div className='section-group'>
        <h2>Education</h2>
      </div>
      <div className='icon-decoration'>
        <div className='headings'>
          <GraduationCap size={20} />
        </div>
      </div>
      {education.map((edu, index) => (
        <div className='section decorated' key={index}>
          <div className='headings'>
            <h3 className='dot'>{edu.period}</h3>
          </div>
          <div className='details'>
            {edu.qualifications.map((qual, idx) => (
              <h4 key={idx}>{qual}</h4>
            ))}
            <p className='establishment'>{edu.establishment}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
