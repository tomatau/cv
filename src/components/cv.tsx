import { ControlPanel, ControlsProvider } from '../controls'
import { Html } from './html'
import {
  Education,
  Expertise,
  Interests,
  PersonalDetails,
  ProfessionalExperience,
} from './sections'
import { Sidebar } from './sidebar'

export function CV() {
  return (
    <Html>
      <ControlsProvider>
        <body>
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
