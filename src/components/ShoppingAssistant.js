import React from 'react';
import './ShoppingAssistant.css';
import BackButton from "./BackButton"; // Import BackButton

function ShoppingAssistant({ recipes, incrementShoppingCount, decrementShoppingCount }) {
    const handleSomeAction = () => {
        incrementShoppingCount();
    };

    return (
        <div className="shopping-assistant-container">
            <BackButton /> {/* Add Back Button */}
            <h2>Shopping Assistant</h2>
            <button onClick={handleSomeAction} className="assist-button">Perform Action</button>
        </div>
    );
}

export default ShoppingAssistant;
