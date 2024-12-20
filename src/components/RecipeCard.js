// src/components/RecipeCard.js

import React from 'react';
import './RecipeCard.css';

function RecipeCard({ image, title, time, rating, onClick }) {
    return (
        <div className="recipe-card" onClick={onClick}>
            <img src={image} alt={title} className="recipe-image" />
            <h3>{title}</h3>
            <p>Time: {time}</p>
            <p>Calories: {rating}</p>
        </div>
    );
}

export default RecipeCard;
