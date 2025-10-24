import './App.css'
import "sensorario-design-system/style/index.css";
import { ThemeContext } from './contexts/ThemeContext';
import { useState } from 'react';
import { ChildComponent } from './components/ChildComponent';

function App() {
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const [theme, setTheme] = useState("light");
  const classes = ["sensorario-container", theme].join(" ");

  return (
    <ThemeContext.Provider value={theme}>
      <div className={classes}>
        <h1>use()</h1>
        <button onClick={toggleTheme}>toggle</button>
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
