import { useFilterExhaustive } from '@/components/utils'
import { ReactNode } from 'react'

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
