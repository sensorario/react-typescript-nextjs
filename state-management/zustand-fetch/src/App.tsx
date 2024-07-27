import useStore from "../src/store";

function App() {
  const store = useStore((state) => state);
  const name = useStore((state) => state.name);

  return (
    <div className="sensorario-container light">
      <h1>zustand fetch</h1>
      {name && <>person: {name}</>}
      <button onClick={() => store.fetchPerson(10)}>load</button>
    </div>
  );
}

export default App;
