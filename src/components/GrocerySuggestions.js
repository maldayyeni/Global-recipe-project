import React, { useState } from 'react';
import './GrocerySuggestions.css';
import NotificationDot from './NotificationDot/NotificationDot';
import BackButton from "./BackButton"; // Import BackButton

const groceryItems = [
    { id: 1, name: 'Bananas', icon: 'https://img.icons8.com/color/96/banana.png' },
    { id: 2, name: 'Apples', icon: 'https://img.icons8.com/color/96/apple.png' },
    // Add additional items here...
];

function GrocerySuggestions({ onBack }) {
    const [counts, setCounts] = useState({});

    const handleIncrement = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1,
        }));
    };

    const handleReset = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: 0,
        }));
    };

    return (
        <div className="grocery-suggestions-container">
            <BackButton /> {/* Add Back Button */}
            <h2>Grocery Suggestions</h2>
            <div className="grocery-items-grid">
                {groceryItems.map((item) => (
                    <div
                        key={item.id}
                        className="grocery-item-card"
                        onClick={() => handleIncrement(item.id)}
                    >
                        <img src={item.icon} alt={item.name} className="grocery-item-icon" />
                        <NotificationDot count={counts[item.id] || 0} onReset={() => handleReset(item.id)} />
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GrocerySuggestions;
