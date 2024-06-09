import React, { useContext } from "react";
import { createContext, useState } from "react";
import "sensorario-design-system/style/index.css";

export const Gabriele = () => {
  const theme = useContext(Conoscenza);
  return <div className="stringa">theme value is {theme}</div>;
};

const useScambiatoreDiTemi = (): [string, () => void] => {
  const [theme, setTheme] = useState("light");
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return [theme, toggle];
};

export const Conoscenza = createContext("light");

function Giovanni() {
  const [theme, inverti] = useScambiatoreDiTemi();

  return (
    <Conoscenza.Provider value={String(theme)}>
      <div className={`sensorario-container ${theme}`}>
        <h1>useContext()</h1>
        <Gabriele />
        <br />
        <button onClick={inverti}>toggle</button>
      </div>
    </Conoscenza.Provider>
  );
}

export default Giovanni;
