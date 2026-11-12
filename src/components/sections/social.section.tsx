import { personalDetails } from '@/content'
import { GithubIcon, LinkedinIcon } from '@/components/utils/brand-icons.component'
import { Mail, MapPin, Phone } from 'lucide-react'

export function SocialSection() {
  return (
    <>
      <div className='section'>
        <div className='headings'>
          <MapPin size={16} />
        </div>
        <div className='details'>
          <p>{personalDetails.address}</p>
        </div>
      </div>
      <div className='section'>
        <div className='headings'>
          <Phone size={16} />
        </div>
        <div className='details'>
          <p>
            <a href={personalDetails.tel.href} target='_blank'>
              {personalDetails.tel.label}
            </a>
          </p>
        </div>
      </div>
      <div className='section'>
        <div className='headings'>
          <Mail size={16} />
        </div>
        <div className='details'>
          <p>
            <a href={personalDetails.email.href} target='_blank'>
              {personalDetails.email.label}
            </a>
          </p>
        </div>
      </div>
      <div className='section'>
        <div className='headings'>
          <LinkedinIcon size={16} />
        </div>
        <div className='details'>
          <p>
            <a href={personalDetails.linkedIn.href} target='_blank'>
              {personalDetails.linkedIn.label}
            </a>
          </p>
        </div>
      </div>
      <div className='section'>
        <div className='headings'>
          <GithubIcon size={16} />
        </div>
        <div className='details'>
          <p>
            <a href={personalDetails.github.href} target='_blank'>
              {personalDetails.github.label}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
