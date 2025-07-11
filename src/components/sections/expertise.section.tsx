import { Lightbulb } from 'lucide-react'

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
      <div className='section decorated'>
        <div className='headings'>
          <h3 className='dot'>Leadership</h3>
        </div>
        <div className='details'>
          <ul>
            <li>
              <p>Lead a team of 6 engineers and 2 designers:</p>
              <ul>
                <li>
                  <p>Enabling over 40 engineers in delivery teams</p>
                </li>
              </ul>
            </li>
            <li>
              <p>Lead front-end engineering alignment:</p>
              <ul>
                <li>
                  <p>Across department of 12 teams</p>
                </li>
              </ul>
            </li>
            <li>
              <p>6 years as a professional full-stack mentor:</p>
              <ul>
                <li>
                  <p>Writing curriculum and running office hours</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className='section decorated'>
        <div className='headings'>
          <h3 className='dot'>Full stack</h3>
        </div>
        <div className='details'>
          <ul>
            <li>
              <p>16 years experience:</p>
              <ul>
                <li>
                  <p>Designing and building APIs</p>
                </li>
                <li>
                  <p>Designing and building single page applications</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className='section decorated'>
        <div className='headings'>
          <h3 className='dot'>Web operations</h3>
        </div>
        <div className='details'>
          <ul>
            <li>
              <p>10 years experience:</p>
              <ul>
                <li>
                  <p>Deploying, continuous integration and monitoring</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
