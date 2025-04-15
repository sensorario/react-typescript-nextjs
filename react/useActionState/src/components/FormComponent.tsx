"use server";

import { useActionState } from "react";

async function handler(previousState: number, data: FormData) {
    console.log({ data })
    return previousState + 1;
}

export function FormComponent() {
    const [state, formActionHandler] = useActionState(handler, 0);

    const message = (() => {
        if (state === 10) return "Insane";
        if (state > 6) return "Mind blowing";
        if (state > 4) return "Incredible";
        if (state > 0) return "Brilliant";
        return "";
    })();

    return (
        <>
            <div className="state">{state}</div>
            <div className="message">{message}</div>
            <form action={formActionHandler} method="post">
                <button>Submit</button>
            </form>
        </>
    );
}