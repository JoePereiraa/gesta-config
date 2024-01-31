import { ReactNode } from 'react'

interface NotificationProps {
    children: ReactNode
}

export function NotificationRoot({children} : NotificationProps) {
    return(
        <div className="card-notification">
            {children}
        </div>
    )
}