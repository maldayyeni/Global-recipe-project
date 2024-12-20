// src/components/RecipeDetails.js

import React from 'react';
import './RecipeDetails.css';

function RecipeDetails({ recipe, onBack }) {
    return (
        <div className="recipe-details">
            <button className="back-button" onClick={onBack}>Back</button>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <p><strong>Cooking Time:</strong> {recipe.time}</p>
            <h2>Ingredients</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <ol>
                {recipe.instructions.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
            <h2>Nutrition Information</h2>
            <ul>
                <li><strong>Calories:</strong> {recipe.nutrition.calories}</li>
                <li><strong>Protein:</strong> {recipe.nutrition.protein}</li>
                <li><strong>Fat:</strong> {recipe.nutrition.fat}</li>
                <li><strong>Carbohydrates:</strong> {recipe.nutrition.carbohydrates}</li>
            </ul>
        </div>
    );
}

export default RecipeDetails;
