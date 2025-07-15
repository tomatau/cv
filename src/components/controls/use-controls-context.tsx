import { useContext } from 'react'
import { ControlsContext } from './controls.context'

export const useControlsContext = () => {
  const context = useContext(ControlsContext)
  if (context === undefined) {
    throw new Error('useControlsContext must be used within a ControlsProvier')
  }
  return context
}
