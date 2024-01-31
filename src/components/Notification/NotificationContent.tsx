interface NotificationProps {
    text: string
}

export function NotificationContent ({text} : NotificationProps) {
    return (
        <div className="card-texts">
            <p>{text}</p>
            <span>Convite Ha 3 min</span>
        </div>
    )
}