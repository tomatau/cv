import { Lightbulb } from 'lucide-react'
import { expertise } from '../../content'
import { NodeList } from '../node-list'

export function Expertise() {
  return (
    <div className='segment' data-segment='expertise'>
      <div className='section-group'>
        <h2>Expertise</h2>
      </div>
      <div className='icon-decoration'>
        <div className='headings'>
          <Lightbulb size={20} />
        </div>
      </div>
      {expertise.map(exp => (
        <div className='section decorated' key={exp.heading}>
          <div className='headings'>
            <h3 className='dot'>{exp.heading}</h3>
          </div>
          <div className='details'>
            <NodeList list={exp.details} />
          </div>
        </div>
      ))}
    </div>
  )
}
