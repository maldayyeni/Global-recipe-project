import React from 'react';
import RecipeCard from '../components/RecipeCard';
import './RecipeListPage.css';

function RecipeListPage({ recipes, onBack, onSelectRecipe }) {
    return (
        <div className="recipe-list-page">
            <button className="back-button" onClick={onBack}>
                ← Back to Countries
            </button>
            <h2>Recipes</h2>
            <div className="recipe-list">
                {recipes.map((recipe, index) => (
                    <RecipeCard
                        key={index}
                        image={recipe.image}
                        title={recipe.name}
                        time={recipe.time}
                        rating={recipe.rating}
                        onClick={() => onSelectRecipe(recipe)}
                    />
                ))}
            </div>
        </div>
    );
}

export default RecipeListPage;
