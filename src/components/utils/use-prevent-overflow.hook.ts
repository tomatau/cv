import { useEffect } from 'react'

export function usePreventOverflow({ enabled }: { enabled: boolean }) {
  useEffect(() => {
    if (!enabled) return
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [enabled])
}
