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
      <body>
        <main className='content'>
          <PersonalDetails />
          <Expertise />
          <Education />
          <ProfessionalExperience />
          <Interests />
        </main>
        <Sidebar />
      </body>
    </Html>
  )
}
