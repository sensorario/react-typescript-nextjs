import { useCallback, useState } from "react";

type Props = {
  incrementa: () => void;
};

function ComponenteFiglio(props: Props): JSX.Element {
  return (
    <div>
      <button onClick={props.incrementa}>Incrementa dal figlio</button>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  const incrementa = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Callback Hooks</h1>
        <button onClick={incrementa}>Incrementa {count}</button>
        <ComponenteFiglio incrementa={incrementa} />
      </header>
    </div>
  );
}

export default App;
