import { Activity, useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState('visible')
  return (
    <>
      <button onClick={() => setMode(mode === 'visible' ? 'hidden' : 'visible')}>
        toggle
      </button>

      <Activity mode={mode === 'visible' ? 'hidden' : 'visible'}>
        <textarea placeholder="Type something..." rows={4} cols={50} />
      </Activity>
    </>
  )
}

export default App
