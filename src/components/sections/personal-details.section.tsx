import { useControlsContext } from '@/components/controls'
import { desiredPosition, personalDetails } from '@/content'

export function PersonalDetails() {
  const controls = useControlsContext()
  return (
    <div className='segment' data-segment='personal-details'>
      <div className='section'>
        <div className='details main-heading'>
          <h1>{personalDetails.name}</h1>
        </div>
      </div>
      <div className='section'>
        <div className='headings'>
          <h2>Desired Position</h2>
        </div>
        <div className='details'>
          <p className='attention'>
            {controls.position || desiredPosition.position}
          </p>
        </div>
      </div>
    </div>
  )
}
