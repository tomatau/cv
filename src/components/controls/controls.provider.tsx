import { ReactNode, useState } from 'react'
import {
  ControlsContext,
  ControlsContextValue,
  initialState,
} from './controls.context'

export function ControlsProvider({ children }: { children: ReactNode }) {
  const [exhaustive, setExhaustive] = useState<
    ControlsContextValue['exhaustive']
  >(initialState.exhaustive)

  const [position, setPosition] = useState<ControlsContextValue['position']>(
    initialState.position
  )

  const [skillsFilter, setSkillsFilter] = useState<
    ControlsContextValue['skillsFilter']
  >(initialState.skillsFilter)

  return (
    <ControlsContext
      value={{
        exhaustive,
        setExhaustive,
        position,
        setPosition,
        skillsFilter,
        setSkillsFilter,
      }}
    >
      {children}
    </ControlsContext>
  )
}
