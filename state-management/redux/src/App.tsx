import { useDispatch, useSelector } from "react-redux";
import { increment } from "./feature/counter/counterSlice";

function App() {
  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );
  const dispatch = useDispatch();

  return (
    <div className="sensorario-container light">
      <h1>Redux</h1>
      <button onClick={() => dispatch(increment())}>increment: {count}</button>
    </div>
  );
}

export default App;
