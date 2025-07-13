export function Html({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <title>Thomas Hudspith-Tatham | CV</title>
        <link rel='stylesheet' href='./assets/style.css'></link>
        <script type='module' src='./assets/client.js' async></script>
      </head>
      {children}
    </html>
  )
}
