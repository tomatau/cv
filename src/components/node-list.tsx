import { ReactNode } from 'react'

type Node = { text: ReactNode; children?: Node[] }

export function NodeList({ list }: { list: Node[] }) {
  return (
    <ul>
      {list.map((item, idx) => (
        <li key={idx}>
          <span>{item.text}</span>
          {item.children && <NodeList list={item.children} />}
        </li>
      ))}
    </ul>
  )
}
