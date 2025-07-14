import Select from 'react-select'
import { Exhaustive, Skills } from '../content'
import { ToggleControl } from './toggle-control.component'
import { useControlsContext } from './use-controls-context'

export function ControlPanel() {
  const controls = useControlsContext()
  return (
    <aside className='controls'>
      <ToggleControl
        id='exhaustive-mode'
        label='Exhaustive:'
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
      <div className='control'>
        <label htmlFor='skillsFilter'>Skills:</label>
        <Select
          inputId='skillsFilter'
          isMulti
          options={Object.values(Skills)
            .sort()
            .map(skill => ({
              label: skill,
              value: skill,
            }))}
          onChange={options => {
            controls.setSkillsFilter(options.map(o => o.value) || null)
          }}
          placeholder='filter skills...'
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              minWidth: '10rem',
              maxWidth: '18rem',
              minHeight: '30px',
              borderColor: 'black',
              borderRadius: '2px',
            }),
            valueContainer: (baseStyles, state) => ({
              ...baseStyles,
              flexWrap: 'nowrap',
              overflowX: 'auto',
              padding: '0px 8px',
            }),
            multiValue: (baseStyles, state) => ({
              ...baseStyles,
              minWidth: 'fit-content',
              borderRadius: '6px',
            }),
            multiValueLabel: (baseStyles, state) => ({
              ...baseStyles,
              padding: '1px',
            }),
            indicatorSeparator: (baseStyles, state) => ({
              ...baseStyles,
              paddingTop: 0,
              paddingBottom: 0,
            }),
            indicatorsContainer: (baseStyles, state) => ({
              ...baseStyles,
              padding: '0px 2px',
            }),
            input: (baseStyles, state) => ({
              ...baseStyles,
              paddingTop: '0px',
              paddingBottom: '0px',
            }),
            dropdownIndicator: (baseStyles, state) => ({
              ...baseStyles,
              paddingTop: '0px',
              paddingBottom: '0px',
            }),
            clearIndicator: (baseStyles, state) => ({
              ...baseStyles,
              paddingTop: '0px',
              paddingBottom: '0px',
            }),
          }}
        />
      </div>
    </aside>
  )
}
