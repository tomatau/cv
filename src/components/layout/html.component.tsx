import { desiredPosition, personalDetails } from '@/content'

export function Html({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta
          name='viewport'
          content='min-width=device-width, initial-scale=1'
        />
        <meta
          name='description'
          content={`Curriculum vitae for ${personalDetails.name}, ${desiredPosition.position}`}
        />
        <title>{personalDetails.name + ' | Curriculum Vitae'}</title>
        <link rel='stylesheet' href='./assets/style.css'></link>
        <script type='module' src='./assets/client.js' async></script>
      </head>
      {children}
    </html>
  )
}
