import { ListaLibri } from "./components/ListaLibri";
import "sensorario-design-system/style/index.css";
import "./App.css";
import { useState } from "react";

const books = [
  { name: 'React' },
  { name: 'React, TypeScript e Next.js' },
];

function App() {
  const [num, setNum] = useState(0);
  const handler = () => {
    setNum(num + 1);
  }

  return (
    <div className="sensorario-container light">
      <h1>React Compiler</h1>
      <button onClick={handler}>incrementa</button>
      <div className="num-of-clicks">{num}</div>
      <ListaLibri books={books} />
    </div>
  );
}

export default App;
