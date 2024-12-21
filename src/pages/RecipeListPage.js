import React from "react";
import RecipeCard from "../components/RecipeCard";
import "./RecipeListPage.css";

function RecipeListPage({
  recipes,
  onRecipeSelect,
  onFavoriteToggle,
  favorites,
}) {
  return (
    <div className="recipe-list-page">
      <h2>Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe}
            onClick={() => onRecipeSelect(recipe)}
            onFavoriteToggle={() => onFavoriteToggle(recipe)}
            isFavorite={favorites.some((fav) => fav.name === recipe.name)}
          />
        ))}
      </div>
    </div>
  );
}

export default RecipeListPage;
