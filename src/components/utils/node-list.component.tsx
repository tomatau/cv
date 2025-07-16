import { useFilterExhaustive } from '@/components/utils'
import { ReactNode } from 'react'

type Node = { text: ReactNode; children?: Node[] }

export function NodeList({
  list,
  showAll = false,
}: {
  list: Node[]
  showAll?: boolean
}) {
  const filteredList = useFilterExhaustive(list)
  return (
    <ul>
      {(showAll ? list : filteredList).map((item, idx) => (
        <li key={idx}>
          <span>{item.text}</span>
          {item.children && <NodeList showAll={showAll} list={item.children} />}
        </li>
      ))}
    </ul>
  )
}
