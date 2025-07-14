import * as Switch from '@radix-ui/react-switch'
import { ReactNode } from 'react'

type ToggleProps = {
  id: string
  label: ReactNode
  checked: boolean
  onCheckedChange: Switch.SwitchProps['onCheckedChange']
}

export function ToggleControl({
  id,
  label,
  checked,
  onCheckedChange,
}: ToggleProps) {
  return (
    <div className='control web-only'>
      <label className='switchLabel' htmlFor={id}>
        {label}
      </label>
      <Switch.Root
        className='switchRoot'
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
      >
        <Switch.Thumb className='switchThumb' />
      </Switch.Root>
    </div>
  )
}
