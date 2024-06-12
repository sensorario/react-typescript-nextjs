import { useReducer } from "react";
import "sensorario-design-system/style/index.css";

enum Actions {
  INCREMENTA = "incrementa",
  DECREMENTA = "decrementa",
}

function reducer(state: any, action: any) {
  if (action.type === Actions.INCREMENTA) {
    return {
      count: state.count + 1,
    };
  }

  if (action.type === Actions.DECREMENTA) {
    return {
      count: state.count - 1,
    };
  }

  throw Error("Azione non conosciuta");
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 42 });

  return (
    <div className="sensorario-container light">
      <h1>useReducer()</h1>
      <button
        onClick={() => {
          dispatch({ type: Actions.INCREMENTA });
        }}
      >
        Incrementa
      </button>
      <button
        onClick={() => {
          dispatch({ type: Actions.DECREMENTA });
        }}
      >
        Decrementa
      </button>
      <p>Contatore {state.count}.</p>
    </div>
  );
}
