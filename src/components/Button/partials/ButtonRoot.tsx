import { ReactNode } from 'react'
import { Button } from "../style.tsx"

interface ButtonProps {
    text: string
    children: ReactNode
    textCenter?: boolean
}

export function ButtonRoot({ text, children, textCenter = false } : ButtonProps) {
    return (
        <Button $center={textCenter}>
            {text}
            {children}
        </Button>
    )
}