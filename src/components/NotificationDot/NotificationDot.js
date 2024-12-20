// src/components/NotificationDot/NotificationDot.js

import React from 'react';
import './NotificationDot.css';

function NotificationDot({ count, onClose }) {
    if (count === 0) return null;

    return (
        <div className="notification-dot">
            <span className="count">{count}</span>
            <button className="close-button" onClick={onClose}>×</button>
        </div>
    );
}

export default NotificationDot;
