import { Exhaustive } from './content'
import { useControlsContext } from './controls'

type ContentWithVerbose = Record<string, unknown>
type SelectExhaustive<T extends ContentWithVerbose> = (
  content: T
) => Exhaustive | null

export const filterExhaustive = <T extends ContentWithVerbose>(
  contentWithVerbose: T,
  exhaustive: Exhaustive,
  selectExhaustive: SelectExhaustive<T>
) => {
  if (!exhaustive) return true
  if (exhaustive === Exhaustive.exhaustive) return true

  // filter for only minimal
  const contentExhaustive = selectExhaustive(contentWithVerbose)
  if (!contentExhaustive) return true
  if (contentExhaustive === Exhaustive.exhaustive) return false
  return true
}

const defaultSelectExhaustive = item => item.exhaustive as Exhaustive

export function useFilterExhaustive<T extends ContentWithVerbose>(
  contentWithVerbose: T[],
  selectExhaustive: SelectExhaustive<T> = defaultSelectExhaustive
) {
  const controls = useControlsContext()
  return contentWithVerbose.filter(content =>
    filterExhaustive(content, controls.exhaustive, selectExhaustive)
  )
}
