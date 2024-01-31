import {X, Check} from 'lucide-react'

interface NotificationProps {
    onCancelAction: () => void
    onSubmitAction: () => void
}

export function NotificationActions ({onCancelAction, onSubmitAction} : NotificationProps) {
    return (
        <div className="card-buttons">
        <button onClick={onCancelAction}>
            <X className="button-icon"/>
        </button>
        <button  onClick={onSubmitAction} className="check">
            <Check className="button-icon"/>
        </button>
    </div>
    )
}