import { ReactNode } from 'react'
import './GlobalStyle.scss'

function GlobalStyles({ children }: { children: ReactNode }) {
    return <>{children}</>
}

export default GlobalStyles
