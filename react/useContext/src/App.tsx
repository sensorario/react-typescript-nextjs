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
  const [tema, inverti] = useScambiatoreDiTemi();

  return (
    <div className="sensorario-container">
      <h1>useContext()</h1>
      <Conoscenza.Provider value={String(tema)}>
        <Gabriele />
        <br />
        <button onClick={inverti}>toggle</button>
      </Conoscenza.Provider>
    </div>
  );
}

export default Giovanni;
