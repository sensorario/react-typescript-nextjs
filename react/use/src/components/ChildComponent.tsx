import { use } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const ChildComponent = () => {
    const theme = use(ThemeContext)
    return <>Il tema attualmente attivo é "{theme}"</>
}