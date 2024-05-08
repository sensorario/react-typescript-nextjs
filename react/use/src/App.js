import React, { useState } from "react";
import { use, createContext } from "react";
import "./App.css";

const ThemeContext = createContext(null);

const Esempio = () => {
  const tema = use(ThemeContext);

  return <div className={"color-" + tema}>esempio in stile {tema}</div>;
};

const useToggle = () => {
  const [boolean, setBoolean] = useState(false);
  const theme = boolean ? "light" : "dark";
  const toggle = () => {
    setBoolean(!boolean);
  };
  return [theme, toggle];
};

function App() {
  const [theme, toggleTheme] = useToggle();

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Esempio />
        <button onClick={() => toggleTheme()}>toggle</button>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
