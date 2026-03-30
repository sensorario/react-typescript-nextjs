import { useRef, useState } from "react";

function Componente() {
  const numerello = useRef(42);
  const [number, incNumber] = useState(3);

  return (
    <div>
      <button onClick={() => incNumber(number + 1)}>
        Valore numerello: '{number}'
      </button>
      <button
        onClick={() => {
          numerello.current++;
          alert(numerello.current);
        }}
      >
        Valore numerello: '{numerello.current}'
      </button>
    </div>
  );
}

export default Componente;
