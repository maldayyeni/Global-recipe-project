import React from "react";
import RecipeCard from "../components/RecipeCard";
import "./FavoritesPage.css";

function FavoritesPage({ favorites, onRecipeSelect }) {
  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      {favorites.length === 0 ? (
        <p>You haven't favorited any recipes yet!</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((recipe, index) => (
            <RecipeCard
              key={index}
              recipe={recipe}
              onClick={() => onRecipeSelect(recipe)}
              isFavorite={true}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
