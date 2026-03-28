import { useState } from 'react'

function ExpensiveList({ items }) {
  console.log("🔥 Generazione lista in corso...");
  return (
    <ul>
      {items.map(i => <li key={i}>{i}</li>)}
    </ul>
  )
}

export default function App() {
  const [count, setCount] = useState(0)
  const items = ["Mela", "Banana", "Ciliegia"]

  return (
    <div>
      <h1>React Compiler Test</h1>
      <button onClick={() => setCount(c => c + 1)}>
        Aggiorna Contatore: {count}
      </button>
      <ExpensiveList items={items} />
    </div>
  )
}