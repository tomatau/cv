import { Exhaustive } from '@/content'
import { createContext, Dispatch, SetStateAction } from 'react'

export type ControlsContextValue = {
  exhaustive: Exhaustive
  setExhaustive: Dispatch<SetStateAction<Exhaustive>>
  position: string
  setPosition: Dispatch<SetStateAction<string>>
  skillsFilter: string[] | null
  setSkillsFilter: Dispatch<SetStateAction<string[] | null>>
}

const noop = () => void 0

export const initialState = {
  exhaustive: Exhaustive.minimal,
  setExhaustive: noop,
  position: 'Lead Front-End Engineer',
  setPosition: noop,
  skillsFilter: null,
  setSkillsFilter: noop,
}

export const ControlsContext = createContext<ControlsContextValue>(initialState)
