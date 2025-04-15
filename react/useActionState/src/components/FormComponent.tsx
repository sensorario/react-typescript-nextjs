"use server";

import { useActionState } from "react";

async function handler(previousState: number, data: FormData) {
    console.log({ data })
    return previousState + 1;
}

export function FormComponent() {
    const [state, formActionHandler] = useActionState(handler, 0);

    return (
        <>
            <div className="state">{state}</div>
            <form action={formActionHandler} method="post">
                <button>Submit</button>
            </form>
        </>
    );
}