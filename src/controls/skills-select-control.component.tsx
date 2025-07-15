import Select from 'react-select'
import { Skills } from '../content'
import { useControlsContext } from './use-controls-context'

export function SkillsSelectControl() {
  const controls = useControlsContext()
  return (
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
            minWidth: '13rem',
            maxWidth: '18rem',
            minHeight: '30px',
            borderColor: 'black',
            borderRadius: '2px',
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            fontSize: 'smaller',
            padding: '4px 8px',
            color: state.isFocused ? 'var(--clr-heading)' : 'inherit',
            fontWeight: state.isFocused ? 'bold' : 'inherit',
            background: state.isFocused
              ? 'var(--clr-name-background)'
              : 'inherit',
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
  )
}
