// src/components/Groceries/Groceries.js

import React, { useState, useEffect } from 'react';
import NotificationDot from '../NotificationDot/NotificationDot';
import './Groceries.css';

function Groceries() {
    const [showNotification, setShowNotification] = useState(false);
    const [itemCount, setItemCount] = useState(0);
    const [groceries, setGroceries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const storedGroceries = JSON.parse(localStorage.getItem('groceries')) || [];
        setGroceries(storedGroceries);
        setItemCount(storedGroceries.length);
        if (storedGroceries.length > 0) {
            setShowNotification(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('groceries', JSON.stringify(groceries));
    }, [groceries]);

    const handleAddItem = (item) => {
        setGroceries([...groceries, item]);
        setItemCount(itemCount + 1);
        setShowNotification(true);
    };

    const handleCloseNotification = () => {
        setShowNotification(false);
    };

    const handleRemoveItem = (index) => {
        const updatedGroceries = [...groceries];
        updatedGroceries.splice(index, 1);
        setGroceries(updatedGroceries);
        setItemCount(itemCount - 1);
        if (updatedGroceries.length === 0) {
            setShowNotification(false);
        }
    };

    const availableGroceries = [
        { id: 1, name: 'Tomatoes', image: 'https://source.unsplash.com/featured/?tomatoes', category: 'Vegetables' },
        { id: 2, name: 'Onions', image: 'https://source.unsplash.com/featured/?onions', category: 'Vegetables' },
        { id: 3, name: 'Garlic', image: 'https://source.unsplash.com/featured/?garlic', category: 'Vegetables' },
        { id: 4, name: 'Apples', image: 'https://source.unsplash.com/featured/?apples', category: 'Fruits' },
        { id: 5, name: 'Bananas', image: 'https://source.unsplash.com/featured/?bananas', category: 'Fruits' },
        // Add more items as needed
    ];

    const filteredGroceries = availableGroceries.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="groceries-container">
            <h2>Groceries</h2>
            <button className="groceries-button" onClick={() => setShowNotification(!showNotification)}>
                Enter Groceries
                {itemCount > 0 && (
                    <NotificationDot count={itemCount} onClose={handleCloseNotification} />
                )}
            </button>

            {showNotification && (
                <div className="groceries-list">
                    <h3>Your Groceries</h3>
                    <ul>
                        {groceries.map((item, index) => (
                            <li key={index}>
                                <img src={item.image} alt={item.name} className="groceries-image" />
                                <span>{item.name}</span>
                                <button className="remove-button" onClick={() => handleRemoveItem(index)}>✕</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="available-groceries">
                <h3>Add Items</h3>
                <input
                    type="text"
                    placeholder="Search groceries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
                <div className="items-grid">
                    {filteredGroceries.map(item => (
                        <div key={item.id} className="item-card" onClick={() => handleAddItem(item)}>
                            <img src={item.image} alt={item.name} className="item-image" />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Groceries;
