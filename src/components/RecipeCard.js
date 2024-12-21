import React from 'react';
import './RecipeCard.css';

function RecipeCard({ image, title, time, rating, onClick }) {
    return (
        <div className="recipe-card" onClick={onClick}>
            <img src={image} alt={title} className="recipe-image" />
            <div className="recipe-info">
                <h3 className="recipe-title">{title}</h3>
                <p className="recipe-meta">Time: {time}</p>
                <p className="recipe-meta">Rating: {rating}</p>
            </div>
        </div>
    );
}

export default RecipeCard;
