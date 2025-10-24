import { Activity, useState } from 'react'
import './App.css'

function App() {
  const [mode, setMode] = useState('visible')
  return (
    <>
      <button onClick={() => setMode(mode === 'visible' ? 'hidden' : 'visible')}>
        toggle
      </button>

      <div className="senza-activity">
        <h2>senza activity</h2>
        {mode === 'hidden' && <textarea placeholder="Type something..." rows={4} cols={50} />}
      </div>
      <div className="con-activity">
        <h2>con activity</h2>
        <Activity mode={mode === 'visible' ? 'hidden' : 'visible'}>
          <textarea placeholder="Type something..." rows={4} cols={50} />
        </Activity>
      </div>
    </>
  )
}

export default App
