import { Exhaustive } from '../content'
import { useControlsContext } from './use-controls-context'

export function ControlPanel() {
  const controls = useControlsContext()
  return (
    <aside className='controls'>
      <div className='control'>
        <button
          onClick={() =>
            controls.setExhaustive(v =>
              v === Exhaustive.minimal
                ? Exhaustive.exhaustive
                : Exhaustive.minimal
            )
          }
        >
          {controls.exhaustive}
        </button>
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
