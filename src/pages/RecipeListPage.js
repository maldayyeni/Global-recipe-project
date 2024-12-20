// src/pages/RecipeListPage.js

import React from 'react';
import RecipeCard from '../components/RecipeCard';
import './RecipeListPage.css';

function RecipeListPage({ recipes, onSelectRecipe }) {
    return (
        <div className="recipe-list-page">
            <h1>Recipes</h1>
            <div className="recipes-grid">
                {recipes.map(recipe => (
                    <RecipeCard
                        key={recipe.id}
                        image={recipe.image}
                        title={recipe.name}
                        time={recipe.time}
                        rating={recipe.nutrition.calories} // Example usage
                        onClick={() => onSelectRecipe(recipe)}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecipeListPage;
