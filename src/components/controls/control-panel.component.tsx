import { Exhaustive } from '@/content'
import { SkillsSelectControl } from './skills-select-control.component'
import { ToggleControl } from './toggle-control.component'
import { useControlsContext } from './use-controls-context'

export function ControlPanel() {
  const controls = useControlsContext()
  return (
    <aside className='control-panel web-only'>
      <ToggleControl
        id='exhaustive-mode'
        label='Detailed view:'
        checked={controls.exhaustive === Exhaustive.exhaustive}
        onCheckedChange={checked =>
          controls.setExhaustive(
            checked ? Exhaustive.exhaustive : Exhaustive.minimal
          )
        }
      />
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
      <SkillsSelectControl />
    </aside>
  )
}
