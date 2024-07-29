import { useSelector } from "react-redux";
import { loadPersonThunk } from "./stores/Swapi/Swapi";
import { useAppDispatch } from "./stores";

function App() {
  const dispatch = useAppDispatch();
  const name = useSelector(
    (state: { swapi: { name: string } }) => state.swapi.name
  );

  return (
    <div className="sensorario-container light">
      <h1>Redux thunk</h1>
      <button
        onClick={() => {
          dispatch(loadPersonThunk(10));
        }}
      >
        press me
      </button>
      {name}
    </div>
  );
}

export default App;
