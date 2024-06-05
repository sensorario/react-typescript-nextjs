import "./App.css";
import { useActionState } from "react";

async function fn(prevState: number, dati: FormData) {
  "use server";
  console.log({ dati });
  return prevState + 1;
}

function Componente() {
  const [state, formAction] = useActionState(fn, 0);

  return (
    <>
      <h1>useActionState()</h1>
      <div>{state}</div>
      <form action={formAction}>
        <button>submit</button>
      </form>
    </>
  );
}

function App() {
  return (
    <>
      <Componente />
    </>
  );
}

export default App;
