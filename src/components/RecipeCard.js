import React from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe, onClick, onFavoriteToggle, isFavorite }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <div className="recipe-details">
        <h3>{recipe.name}</h3>
        <p>{recipe.time}</p>
        <button className="view-button" onClick={onClick}>
          View Recipe
        </button>
        <button
          className={`favorite-button ${isFavorite ? "favorited" : ""}`}
          onClick={onFavoriteToggle}
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
