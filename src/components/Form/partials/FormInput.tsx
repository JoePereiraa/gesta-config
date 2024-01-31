import { ReactNode } from 'react'
import '../style.css';

interface FormProps {
    type?: string
    placeholder: string
    children: ReactNode
}

export const FormInput = ({ type, placeholder, children} : FormProps) => {
    return (
        <div class="input">
            {children}
            <input type={type} placeholder={placeholder} />
        </div>
    )
}

