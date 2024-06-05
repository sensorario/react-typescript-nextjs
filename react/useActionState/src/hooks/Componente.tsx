"use server";

import { useActionState } from "react";

async function fn(prevState: number) {
  "use server";
  return prevState + 1;
}

export function Componente() {
  const [state, formAction] = useActionState(fn, 0);

  return (
    <>
      <h1>useActionState()</h1>
      <div>{state}</div>
      <form action={formAction}>
        <button onClick={formAction}>submit</button>
      </form>
    </>
  );
}

export default Componente;
