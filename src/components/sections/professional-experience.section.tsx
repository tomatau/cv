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
  unstable_addTransitionType as addTransitionType,
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
  const close = () =>
    startTransition(() => {
      addTransitionType('job-close')
      context.setOverlay(null)
    })
  return (
    <ViewTransition name={`job-${experience.id}-underlay`}>
      <div
        className='underlay'
        onClick={e => {
          e.stopPropagation()
          close()
        }}
      >
        <ViewTransition name={`job-${experience.id}`} share='job-card'>
          <div className='job-overlay' onClick={e => e.stopPropagation()}>
            <X className='close' onClick={() => close()} />
            <h4>{experience.role}</h4>
            <p className='establishment'>
              <ViewTransition
                name={`job-${experience.id}-name`}
                share='job-card-name'
              >
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

function EstablishmentLine({
  experience,
  named,
}: {
  experience: ProfessionalExperience
  named: boolean
}) {
  const name = (
    <span className='establishment-name'>{experience.establishment.name}</span>
  )
  return (
    <p className='establishment'>
      {named ? (
        <ViewTransition
          name={`job-${experience.id}-name`}
          share='job-card-name'
        >
          {name}
        </ViewTransition>
      ) : (
        name
      )}
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
  const isOpen = context.overlay === experience.id
  const open = () => {
    if (isOpen) return
    startTransition(() => {
      addTransitionType('job-open')
      context.setOverlay(experience.id)
    })
  }

  const summary = (
    <>
      <h4>{experience.role}</h4>
      <EstablishmentLine experience={experience} named={!isOpen} />
      {showResponsibilities && <NodeList list={experience.responsibilities} />}
      {showSkills && <SkillList skills={experience.skills} />}
    </>
  )

  return (
    <div
      className={`section decorated ${isOpen ? '' : 'interactive'}`}
      role='button'
      onClick={open}
    >
      <div className='headings'>
        <h3 className='with-dot'>
          {experience.period.from}
          <br />
          &mdash;
          <br />
          {experience.period.to ?? 'Present'}
        </h3>
      </div>
      {isOpen ? (
        <>
          {/* A static copy keeps the row filled while the card is in the overlay */}
          <div className='details placeholder' aria-hidden>
            {summary}
          </div>
          <JobOverlay />
        </>
      ) : (
        <ViewTransition name={`job-${experience.id}-underlay`}>
          <div className='underlay hiding'>
            <ViewTransition name={`job-${experience.id}`} share='job-card'>
              <div className='details'>{summary}</div>
            </ViewTransition>
          </div>
        </ViewTransition>
      )}
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
