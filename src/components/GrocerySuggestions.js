import React, { useState } from 'react';
import './GrocerySuggestions.css';
import NotificationDot from './NotificationDot/NotificationDot';

// Expanded list of grocery items
const groceryItems = [
    // Fruits
    { id: 1, name: 'Bananas', icon: 'https://img.icons8.com/color/96/banana.png' },
    { id: 2, name: 'Apples', icon: 'https://img.icons8.com/color/96/apple.png' },
    { id: 3, name: 'Oranges', icon: 'https://img.icons8.com/color/96/orange.png' },
    { id: 4, name: 'Grapes', icon: 'https://img.icons8.com/color/96/grape.png' },
    { id: 5, name: 'Strawberries', icon: 'https://img.icons8.com/color/96/strawberry.png' },
    { id: 6, name: 'Blueberries', icon: 'https://img.icons8.com/color/96/blueberry.png' },
    { id: 7, name: 'Pineapples', icon: 'https://img.icons8.com/color/96/pineapple.png' },
    { id: 8, name: 'Mangoes', icon: 'https://img.icons8.com/color/96/mango.png' },
    { id: 9, name: 'Peaches', icon: 'https://img.icons8.com/color/96/peach.png' },
    { id: 10, name: 'Cherries', icon: 'https://img.icons8.com/color/96/cherry.png' },
    // Vegetables
    { id: 11, name: 'Carrots', icon: 'https://img.icons8.com/color/96/carrot.png' },
    { id: 12, name: 'Tomatoes', icon: 'https://img.icons8.com/color/96/tomato.png' },
    { id: 13, name: 'Onions', icon: 'https://img.icons8.com/color/96/onion.png' },
    { id: 14, name: 'Garlic', icon: 'https://img.icons8.com/color/96/garlic.png' },
    { id: 15, name: 'Potatoes', icon: 'https://img.icons8.com/color/96/potato.png' },
    { id: 16, name: 'Spinach', icon: 'https://img.icons8.com/color/96/spinach.png' },
    { id: 17, name: 'Broccoli', icon: 'https://img.icons8.com/color/96/broccoli.png' },
    { id: 18, name: 'Peppers', icon: 'https://img.icons8.com/color/96/pepper.png' },
    { id: 19, name: 'Cucumbers', icon: 'https://img.icons8.com/color/96/cucumber.png' },
    // Dairy
    { id: 20, name: 'Milk', icon: 'https://img.icons8.com/color/96/milk-bottle.png' },
    { id: 21, name: 'Cheese', icon: 'https://img.icons8.com/color/96/cheese.png' },
    { id: 22, name: 'Eggs', icon: 'https://img.icons8.com/color/96/egg.png' },
    { id: 23, name: 'Butter', icon: 'https://img.icons8.com/color/96/butter.png' },
    // Meat & Poultry
    { id: 24, name: 'Chicken', icon: 'https://img.icons8.com/color/96/chicken-leg.png' },
    { id: 25, name: 'Beef', icon: 'https://img.icons8.com/color/96/steak.png' },
    { id: 26, name: 'Pork', icon: 'https://img.icons8.com/color/96/pork.png' },
    { id: 27, name: 'Turkey', icon: 'https://img.icons8.com/color/96/turkey.png' },
    // Seafood
    { id: 28, name: 'Salmon', icon: 'https://img.icons8.com/color/96/salmon.png' },
    { id: 29, name: 'Shrimp', icon: 'https://img.icons8.com/color/96/shrimp.png' },
    { id: 30, name: 'Tuna', icon: 'https://img.icons8.com/color/96/fish.png' },
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
            <button className="back-button" onClick={onBack}>
                ← Back
            </button>
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
