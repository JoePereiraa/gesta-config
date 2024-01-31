import ElementType from 'react';

interface NotificationProps {
    icon: ElementType
}

export function NotificationIcon ({icon: Icon} : NotificationProps) {
    return (
        <Icon className="card-icon"/>
    )
}