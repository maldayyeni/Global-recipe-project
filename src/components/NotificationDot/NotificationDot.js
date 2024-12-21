import React from 'react';
import './NotificationDot.css';

function NotificationDot({ count, onReset }) {
    if (count === 0) return null;

    return (
        <div className="notification-container">
            <div className="count-badge">{count}</div>
            <button
                className="reset-button"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering parent onClick
                    onReset();
                }}
            >
                ×
            </button>
        </div>
    );
}

export default NotificationDot;
