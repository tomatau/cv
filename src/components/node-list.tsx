import { ReactNode } from 'react'
import { useFilterExhaustive } from '../use-filter-exhaustive.hook'

type Node = { text: ReactNode; children?: Node[] }

export function NodeList({ list }: { list: Node[] }) {
  const filteredList = useFilterExhaustive(list)
  return (
    <ul>
      {filteredList.map((item, idx) => (
        <li key={idx}>
          <span>{item.text}</span>
          {item.children && <NodeList list={item.children} />}
        </li>
      ))}
    </ul>
  )
}
