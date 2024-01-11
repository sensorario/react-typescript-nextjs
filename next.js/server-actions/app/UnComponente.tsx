'use client'

import { useState } from "react"

export default function UnComponente({ ...props }) {
    const [valore, setValore] = useState(null)

    return (
        <button onClick={() => {
            setValore(props.create())
        }}>press me ({valore})</button>
    )
}
