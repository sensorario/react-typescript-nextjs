'use client'

import { useState } from "react"

export default function UnComponente({ ...props }) {
    const [valore, setValore] = useState(0)

    return (
        <button onClick={() => {
            setValore(props.create())
        }}>press me ({valore})</button>
    )
}
