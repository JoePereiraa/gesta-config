import { ReactNode } from 'react'
import '../style.css';

interface FormProps {
    children: ReactNode
}

export const FormContent = ({ children } : FormProps) => {
    return (
        <>
            {children && (
                <div className="form-content">
                    {children}
                </div>
            )}
        </>
    )
}