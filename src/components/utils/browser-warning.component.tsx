import { useEffect, useState } from 'react'

export function BrowserWarning() {
  const [badBrowser, setBadBrowser] = useState(false)
  const [badDevice, setBadDevice] = useState(false)

  useEffect(() => {
    const isChromium = 'chrome' in window || /Edg\//.test(navigator.userAgent)
    const isMobile =
      /Mobi|Android|iPhone|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      )
    if (!isChromium) {
      setBadBrowser(true)
    }
    if (isMobile) {
      setBadDevice(true)
    }
  }, [])

  return badBrowser || badDevice ? (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.85)',
        color: '#faf2fe',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
        backdropFilter: 'blur(2px)',
      }}
    >
      <h2 style={{ fontSize: '2rem' }}>Unsupported Browser</h2>
      <div style={{ maxWidth: '600px' }}>
        <p style={{ fontSize: '1.2rem', textWrap: 'balance' }}>
          {!badBrowser &&
            'This CV works best in a Chromium-based browser (such as Chrome, Edge, or Brave) on a laptop or computer.'}
          {!badDevice && 'This CV is not optimised for mobile'}
        </p>
        <br />
        <p style={{ fontSize: '1.2rem' }}>
          {!badBrowser &&
            'Please switch to a Chromium browser on a computer or laptop for the best experience.'}
        </p>
      </div>
    </div>
  ) : null
}
