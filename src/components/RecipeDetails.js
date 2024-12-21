import React from 'react';
import './RecipeDetails.css';

function RecipeDetails({ recipe, onBack }) {
    return (
        <div className="recipe-details">
            <button className="back-button" onClick={onBack}>
                ← Back
            </button>
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <div className="recipe-info">
                <h2>Cooking Time: {recipe.time}</h2>
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
            </div>
        </div>
    );
}

export default RecipeDetails;
