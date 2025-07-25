import { NodeList } from '@/components/utils/node-list.component'
import { interests } from '@/content'
import { Heart } from 'lucide-react'

export function InterestsSection() {
  return (
    <div className='segment' data-segment='personal-interests'>
      <div className='section-group'>
        <h2>Personal Interests</h2>
      </div>
      <div className='icon-decoration'>
        <div className='headings'>
          <Heart size={20} />
        </div>
      </div>
      {interests.map((interest, idx) => (
        <div className='section decorated' key={idx}>
          <div className='headings'>
            <h3 className='dot'>{interest.heading}</h3>
          </div>
          <div className='details'>
            <NodeList list={interest.details} />
          </div>
        </div>
      ))}
    </div>
  )
}
