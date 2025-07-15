import { BrowserWarning } from '@/components/browser-warning.component'
import { ControlPanel, ControlsProvider } from '@/components/controls'
import { Html } from '@/components/layout/html.component'
import { Sidebar } from '@/components/layout/sidebar.component'
import {
  Education,
  Expertise,
  Interests,
  PersonalDetails,
  ProfessionalExperience,
} from '@/components/sections'

export function CV() {
  return (
    <Html>
      <ControlsProvider>
        <body>
          <BrowserWarning />
          <ControlPanel />
          <main className='content'>
            <PersonalDetails />
            <Expertise />
            <Education />
            <ProfessionalExperience />
            <Interests />
          </main>
          <Sidebar />
        </body>
      </ControlsProvider>
    </Html>
  )
}
