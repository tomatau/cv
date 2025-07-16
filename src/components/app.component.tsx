import { ControlPanel, ControlsProvider } from '@/components/controls'
import { Html } from '@/components/layout/html.component'
import { Sidebar } from '@/components/layout/sidebar.component'
import {
  EducationSection,
  ExpertiseSection,
  InterestsSection,
  JobOverlayProvider,
  PersonalDetailsSection,
  ProfessionalExperienceSection,
  SkillsSection,
  SocialSection,
} from '@/components/sections'
import { BrowserWarning } from '@/components/utils/browser-warning.component'

function Cv() {
  return (
    <>
      <main className='content'>
        <PersonalDetailsSection />
        <ExpertiseSection />
        <EducationSection />
        <ProfessionalExperienceSection />
        <InterestsSection />
      </main>
      <Sidebar>
        <SocialSection />
        <SkillsSection />
      </Sidebar>
    </>
  )
}

export function App() {
  return (
    <Html>
      <ControlsProvider>
        <JobOverlayProvider>
          <body>
            <BrowserWarning />
            <ControlPanel />
            <Cv />
          </body>
        </JobOverlayProvider>
      </ControlsProvider>
    </Html>
  )
}
