// src/components/GrocerySuggestions.js

import React, { useState } from 'react';
import './GrocerySuggestions.css';
import NotificationDot from './NotificationDot/NotificationDot'; // Ensure the path is correct

// Comprehensive list of grocery categories, sorted by importance
const groceryCategories = [
    {
        category: 'Fruits',
        items: [
            { id: 1, name: 'Bananas' },
            { id: 2, name: 'Apples' },
            { id: 3, name: 'Oranges' },
            { id: 4, name: 'Grapes' },
            { id: 5, name: 'Strawberries' },
            { id: 6, name: 'Blueberries' },
            { id: 7, name: 'Pineapples' },
            { id: 8, name: 'Mangoes' },
            { id: 9, name: 'Peaches' },
            { id: 10, name: 'Cherries' },
        ],
    },
    {
        category: 'Vegetables',
        items: [
            { id: 11, name: 'Onions' },
            { id: 12, name: 'Tomatoes' },
            { id: 13, name: 'Carrots' },
            { id: 14, name: 'Garlic' },
            { id: 15, name: 'Potatoes' },
            { id: 16, name: 'Spinach' },
            { id: 17, name: 'Lettuce' },
            { id: 18, name: 'Broccoli' },
            { id: 19, name: 'Cucumbers' },
            { id: 20, name: 'Peppers' },
            { id: 21, name: 'Mushrooms' },
        ],
    },
    {
        category: 'Dairy',
        items: [
            { id: 22, name: 'Milk' },
            { id: 23, name: 'Cheese' },
            { id: 24, name: 'Butter' },
            { id: 25, name: 'Eggs' },
            { id: 26, name: 'Yogurt' },
        ],
    },
    {
        category: 'Meat & Poultry',
        items: [
            { id: 27, name: 'Chicken' },
            { id: 28, name: 'Beef' },
            { id: 29, name: 'Pork' },
            { id: 30, name: 'Turkey' },
            { id: 31, name: 'Lamb' },
        ],
    },
    {
        category: 'Seafood',
        items: [
            { id: 32, name: 'Salmon' },
            { id: 33, name: 'Shrimp' },
            { id: 34, name: 'Tuna' },
            { id: 35, name: 'Cod' },
            { id: 36, name: 'Crab' },
        ],
    },
    {
        category: 'Bakery',
        items: [
            { id: 37, name: 'Bread' },
            { id: 38, name: 'Bagels' },
            { id: 39, name: 'Croissants' },
            { id: 40, name: 'Muffins' },
            { id: 41, name: 'Donuts' },
        ],
    },
    {
        category: 'Pantry Staples',
        items: [
            { id: 42, name: 'Rice' },
            { id: 43, name: 'Pasta' },
            { id: 44, name: 'Flour' },
            { id: 45, name: 'Sugar' },
            { id: 46, name: 'Salt' },
            { id: 47, name: 'Olive Oil' },
        ],
    },
];

// Map item names to icon URLs
const iconUrls = {
    Bananas: 'https://img.icons8.com/color/96/000000/banana.png',
    Apples: 'https://img.icons8.com/color/96/000000/apple.png',
    Oranges: 'https://img.icons8.com/color/96/000000/orange.png',
    Grapes: 'https://img.icons8.com/color/96/000000/grape.png',
    Strawberries: 'https://img.icons8.com/color/96/000000/strawberry.png',
    Blueberries: 'https://img.icons8.com/color/96/000000/blueberry.png',
    Pineapples: 'https://img.icons8.com/color/96/000000/pineapple.png',
    Mangoes: 'https://img.icons8.com/color/96/000000/mango.png',
    Onions: 'https://img.icons8.com/color/96/000000/onion.png',
    Tomatoes: 'https://img.icons8.com/color/96/000000/tomato.png',
    Carrots: 'https://img.icons8.com/color/96/000000/carrot.png',
    Garlic: 'https://img.icons8.com/color/96/000000/garlic.png',
    Potatoes: 'https://img.icons8.com/color/96/000000/potato.png',
    Spinach: 'https://img.icons8.com/color/96/000000/spinach.png',
    Lettuce: 'https://img.icons8.com/color/96/000000/lettuce.png',
    Milk: 'https://img.icons8.com/color/96/000000/milk-bottle.png',
    Cheese: 'https://img.icons8.com/color/96/000000/cheese.png',
    Butter: 'https://img.icons8.com/color/96/000000/butter.png',
    Eggs: 'https://img.icons8.com/color/96/000000/egg.png',
    Chicken: 'https://img.icons8.com/color/96/000000/chicken-leg.png',
    Beef: 'https://img.icons8.com/color/96/000000/steak.png',
    Pork: 'https://img.icons8.com/color/96/000000/pork.png',
    Salmon: 'https://img.icons8.com/color/96/000000/salmon.png',
    Shrimp: 'https://img.icons8.com/color/96/000000/shrimp.png',
    Bread: 'https://img.icons8.com/color/96/000000/bread.png',
    Rice: 'https://img.icons8.com/color/96/000000/rice-bowl.png',
    Pasta: 'https://img.icons8.com/color/96/000000/spaghetti.png',
    Flour: 'https://img.icons8.com/color/96/000000/flour.png',
    Sugar: 'https://img.icons8.com/color/96/000000/sugar-cubes.png',
    Salt: 'https://img.icons8.com/color/96/000000/salt.png',
    'Olive Oil': 'https://img.icons8.com/color/96/000000/olive-oil.png',
};

function GrocerySuggestions() {
    const [counts, setCounts] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const handleIncrement = (id) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1,
        }));
    };

    const handleReset = (id) => {
        setCounts(prevCounts => ({
            ...prevCounts,
            [id]: 0,
        }));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredCategories = groceryCategories.map(category => {
        const filteredItems = category.items.filter(item =>
            item.name.toLowerCase().includes(searchTerm)
        );
        return { ...category, items: filteredItems };
    }).filter(category => category.items.length > 0);

    return (
        <div className="grocery-suggestions-container">
            <h2>Grocery Suggestions</h2>
            <input
                type="text"
                placeholder="Search groceries..."
                className="search-bar"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {filteredCategories.map(category => (
                <div key={category.category} className="category-section">
                    <h3 className="category-title">{category.category}</h3>
                    <div className="grocery-items-grid">
                        {category.items.map(item => (
                            <div
                                key={item.id}
                                className="icon-container"
                                onClick={() => handleIncrement(item.id)}
                            >
                                <img
                                    src={iconUrls[item.name] || 'https://via.placeholder.com/100?text=No+Image'}
                                    alt={item.name}
                                    className="icon-image"
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/100?text=No+Image'; }}
                                />
                                <NotificationDot count={counts[item.id] || 0} onReset={() => handleReset(item.id)} />
                                <span className="grocery-item-name">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GrocerySuggestions;
