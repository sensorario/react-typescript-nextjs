"use server";

import { useActionState } from "react";

async function fn(prevState: number, dati: FormData) {
  return prevState + 1;
}

export function Componente() {
  const [state, formAction] = useActionState(fn, 0);

  return (
    <>
      <div>{state}</div>
      <form action={formAction}>
        <button>submit</button>
      </form>
    </>
  );
}

export default Componente;
