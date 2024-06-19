import { useMemo, useState } from "react";
import "sensorario-design-system/style/index.css";

function App() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const total = useMemo(() => {
    console.log("ricalcola");
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      sum += list[i];
    }
    return sum;
  }, [list]);

  const updateList = () => {
    const newList = [...list, Math.floor(Math.random() * 10) + 1];
    setList(newList);
  };

  return (
    <div className="sensorario-container light">
      <h1>useMemo()</h1>
      <button onClick={updateList}>aggiorna lista {list.join(",")}</button>
      <button
        onClick={() => {
          console.log(total);
        }}
      >
        richiama funzione
      </button>
    </div>
  );
}

export default App;
