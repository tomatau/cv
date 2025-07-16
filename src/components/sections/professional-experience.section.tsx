/// <reference types="react/experimental" />
import { ToggleControl, useControlsContext } from '@/components/controls'
import { useFilterExhaustive, useFilterSkills } from '@/components/utils'
import { NodeList } from '@/components/utils/node-list.component'
import { SkillList } from '@/components/utils/skill-list.component'
import {
  Exhaustive,
  ProfessionalExperience,
  professionalExperience,
} from '@/content'
import { Briefcase, X } from 'lucide-react'
import {
  createContext,
  Dispatch,
  ReactNode,
  startTransition,
  useContext,
  useState,
  unstable_ViewTransition as ViewTransition,
} from 'react'

const NUM_ITEMS_TO_SHOW_RESPONSIBILITIES = 2

type JobOverlayContextValue = {
  overlay: ProfessionalExperience['id'] | null
  setOverlay: Dispatch<React.SetStateAction<JobOverlayContextValue['overlay']>>
}

export const JobOverlayContext = createContext<JobOverlayContextValue>({
  overlay: null,
  setOverlay: () => undefined,
})

export function JobOverlayProvider({ children }: { children: ReactNode }) {
  const [overlay, setOverlay] =
    useState<JobOverlayContextValue['overlay']>(null)

  return (
    <JobOverlayContext value={{ overlay, setOverlay }}>
      {children}
    </JobOverlayContext>
  )
}

export function JobOverlay() {
  const context = useContext(JobOverlayContext)
  const experience = professionalExperience.find(
    exp => exp.id === context.overlay
  )!
  const close = () => startTransition(() => context.setOverlay(null))
  return (
    <ViewTransition name={`job-${experience.id}-underlay`}>
      <div className='underlay' onClick={() => close()}>
        <ViewTransition name={`job-${experience.id}`} default='promote'>
          <div className='job-overlay' onClick={e => e.stopPropagation()}>
            <X className='close' onClick={() => close()} />
            <h4>{experience.role}</h4>
            <p className='establishment'>
              <ViewTransition name={`job-${experience.id}-name`}>
                <span className='establishment-name'>
                  {experience.establishment.name}
                </span>
              </ViewTransition>
              &raquo;
              <span className='establishment-location'>
                {experience.establishment.location}
              </span>
              {experience.establishment.size && (
                <>
                  &raquo;
                  <span className='establishment-size'>
                    {experience.establishment.size}
                  </span>
                </>
              )}
            </p>
            {experience.establishment.website && (
              <p>
                <a
                  href={experience.establishment.website}
                  target='_blank'
                  rel='noopener noreferrer nofollow'
                >
                  {experience.establishment.website}
                </a>
              </p>
            )}
            {experience.establishment.about && (
              <>
                <h5>About</h5>
                <p>{experience.establishment.about}</p>
              </>
            )}
            <h5>Responsibilties</h5>
            <div className='list'>
              <NodeList showAll list={experience.responsibilities} />
            </div>
            <h5>Skills</h5>
            <SkillList showAll skills={experience.skills} />
          </div>
        </ViewTransition>
      </div>
    </ViewTransition>
  )
}

function ProfessionalExperienceItem({
  experience,
  showResponsibilities,
  showSkills,
}: {
  experience: ProfessionalExperience
  showResponsibilities: boolean
  showSkills: boolean
}) {
  const context = useContext(JobOverlayContext)

  if (context.overlay === experience.id) return <JobOverlay />

  return (
    <div
      className='section decorated interactive'
      key={experience.id}
      role='button'
      onClick={() => startTransition(() => context.setOverlay(experience.id))}
    >
      <div className='headings'>
        <h3 className='with-dot'>
          {experience.period.from}
          <br />
          &mdash;
          <br />
          {experience.period.to}
        </h3>
      </div>
      <ViewTransition name={`job-${experience.id}-underlay`}>
        <div className='underlay hiding'>
          <ViewTransition name={`job-${experience.id}`}>
            <div className='details'>
              <h4>{experience.role}</h4>
              <p className='establishment'>
                <ViewTransition name={`job-${experience.id}-name`}>
                  <span className='establishment-name'>
                    {experience.establishment.name}
                  </span>
                </ViewTransition>
                &raquo;
                <span className='establishment-location'>
                  {experience.establishment.location}
                </span>
                {experience.establishment.size && (
                  <>
                    &raquo;
                    <span className='establishment-size'>
                      {experience.establishment.size}
                    </span>
                  </>
                )}
              </p>
              {showResponsibilities && (
                <NodeList list={experience.responsibilities} />
              )}
              {showSkills && <SkillList skills={experience.skills} />}
            </div>
          </ViewTransition>
        </div>
      </ViewTransition>
    </div>
  )
}

function ExperienceList({ showSkills }: { showSkills: boolean }) {
  const controls = useControlsContext()
  const filteredBySkills = useFilterSkills(professionalExperience, item =>
    item.skills.map(skillD => skillD.text)
  )
  const filteredExhaustive = useFilterExhaustive(filteredBySkills)

  return filteredExhaustive.map((professionalExperience, idx) => {
    const showResponsibilities =
      controls.exhaustive === Exhaustive.exhaustive ||
      idx < NUM_ITEMS_TO_SHOW_RESPONSIBILITIES
    return (
      <ProfessionalExperienceItem
        key={professionalExperience.establishment.name}
        experience={professionalExperience}
        showResponsibilities={showResponsibilities}
        showSkills={showSkills}
      />
    )
  })
}

export function ProfessionalExperienceSection() {
  const [showSkills, setShowSkills] = useState(true)
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
      <ExperienceList showSkills={showSkills} />
    </div>
  )
}
