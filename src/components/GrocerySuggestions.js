// src/components/GrocerySuggestions.js

import React from 'react';
import './GrocerySuggestions.css';

function GrocerySuggestions({ recipes, incrementGroceryCount, decrementGroceryCount }) {
    // Example grocery items derived from recipes
    const groceryItems = [
        { id: 1, name: 'Tomatoes', image: 'https://source.unsplash.com/featured/?tomatoes' },
        { id: 2, name: 'Onions', image: 'https://source.unsplash.com/featured/?onions' },
        { id: 3, name: 'Garlic', image: 'https://source.unsplash.com/featured/?garlic' },
        { id: 4, name: 'Apples', image: 'https://source.unsplash.com/featured/?apples' },
        { id: 5, name: 'Bananas', image: 'https://source.unsplash.com/featured/?bananas' },
        // Add more items as needed
    ];

    const handleAddItem = (item) => {
        incrementGroceryCount();
    };

    const handleRemoveItem = (item) => {
        decrementGroceryCount();
    };

    return (
        <div className="grocery-suggestions-container">
            <h2>Grocery Suggestions</h2>
            <div className="grocery-items-grid">
                {groceryItems.map(item => (
                    <div key={item.id} className="grocery-item-card">
                        <img src={item.image} alt={item.name} className="grocery-item-image" />
                        <span className="grocery-item-name">{item.name}</span>
                        <div className="grocery-item-buttons">
                            <button onClick={() => handleAddItem(item)} className="add-button">Add</button>
                            <button onClick={() => handleRemoveItem(item)} className="remove-button">Remove</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GrocerySuggestions;
