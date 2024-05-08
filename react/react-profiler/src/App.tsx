import { Profiler, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const theFunction = (
    id: string,
    phase: "mount" | "update" | "nested-update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ): void => {
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
    });
  };

  return (
    <>
      <Profiler id="primo-profiler" onRender={theFunction}>
        Ciaone!
        <button onClick={() => setCounter(counter + 1)}>
          pressed {counter} times
        </button>
      </Profiler>
    </>
  );
}

export default App;
