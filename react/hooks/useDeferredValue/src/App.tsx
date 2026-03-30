import { useState, useDeferredValue, memo } from 'react'
import './App.css'

function slowDown(ms: number) {
  const start = performance.now()
  while (performance.now() - start < ms) { /* blocco intenzionale */ }
}

const ACTORS = [
  'Marlon Brando', 'Al Pacino', 'Robert De Niro', 'Meryl Streep', 'Cate Blanchett',
  'Dustin Hoffman', 'Jack Nicholson', 'Anthony Hopkins', 'Daniel Day-Lewis', 'Jodie Foster',
  'Tom Hanks', 'Charlize Theron', 'Leonardo DiCaprio', 'Natalie Portman', 'Heath Ledger',
  'Audrey Hepburn', 'Humphrey Bogart', 'Bette Davis', 'James Dean', 'Sophia Loren',
]

const SlowList = memo(({ query }: { query: string }) => {
  slowDown(100)

  const items = ACTORS.filter(
    (actor) => actor.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
})

function App() {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)
  const isStale = query !== deferredQuery

  return (
    <>
      <h1>useDeferredValue</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca..."
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />
      {isStale && <p style={{ color: 'gray' }}>Aggiornamento lista...</p>}
      <div style={{ opacity: isStale ? 0.5 : 1, transition: 'opacity 0.2s' }}>
        <SlowList query={deferredQuery} />
      </div>
    </>
  )
}

export default App
