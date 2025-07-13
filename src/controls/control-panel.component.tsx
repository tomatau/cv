import * as Switch from '@radix-ui/react-switch'
import { Exhaustive } from '../content'
import { useControlsContext } from './use-controls-context'

export function ControlPanel() {
  const controls = useControlsContext()
  return (
    <aside className='controls'>
      <div className='control'>
        <label className='switchLabel' htmlFor='exhaustive-mode'>
          Exhaustive:
        </label>
        <Switch.Root
          className='switchRoot'
          id='exhaustive-mode'
          checked={controls.exhaustive === Exhaustive.exhaustive}
          onCheckedChange={checked =>
            controls.setExhaustive(
              checked ? Exhaustive.exhaustive : Exhaustive.minimal
            )
          }
        >
          <Switch.Thumb className='switchThumb' />
        </Switch.Root>
      </div>
      <div className='control'>
        <label htmlFor='position'>Position:</label>
        <input
          type='text'
          id='position'
          name='position'
          value={controls.position}
          onInput={val => controls.setPosition(val.currentTarget.value)}
        />
      </div>
      <div className='control'>
        <label htmlFor='skillsFilter'>Skills:</label>
        <input
          type='text'
          id='skillsFilter'
          name='skillsFilter'
          value={controls.skillsFilter || ''}
          onInput={val =>
            controls.setSkillsFilter(val.currentTarget.value || null)
          }
        />
      </div>
    </aside>
  )
}
