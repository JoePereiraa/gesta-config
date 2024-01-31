import { ReactNode } from 'react'
import '../style.css';

interface FormProps {
    title: string,
    children: ReactNode
}

export const FormRoot = ({title, children} : FormProps) => {
    return (
        <>
            <form>
                {title && (
                    <span>{title}</span>
                )}
                {children}
            </form>
        </>
    )
}