import { useEffect, useState } from 'react'

export function BrowserWarning() {
  const [showOverlay, setShowOverlay] = useState(false)

  useEffect(() => {
    const isChromium = 'chrome' in window || /Edg\//.test(navigator.userAgent)
    if (!isChromium) setShowOverlay(true)
  }, [])

  return showOverlay ? (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.85)',
        color: '#fff',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <h2>Unsupported Browser</h2>
      <p>
        This CV works best in a Chromium-based browser (such as Chrome, Edge, or
        Brave).
      </p>
      <p>Please switch to a Chromium browser for the best experience.</p>
    </div>
  ) : null
}
