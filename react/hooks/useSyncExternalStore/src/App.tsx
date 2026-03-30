import { useSyncExternalStore } from "react";
import { getSnapshot, subscribe } from "./store/esempio";

function App() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div className="sensorario-container light">
      <h1>useSyncExternalStore</h1>
      {isOnline ? "sei online" : "sei offline"}
    </div>
  );
}

export default App;
