import React from "react";
import "./RecipeDetails.css";

function RecipeDetails({ recipe }) {
  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="recipe-details-container">
      <h2 className="recipe-title">{recipe.name}</h2>
      <img
        src={recipe.image || "https://via.placeholder.com/300"}
        alt={recipe.name}
        className="recipe-image"
      />
      <p className="recipe-time">Cooking Time: {recipe.time}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {recipe.instructions.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      {recipe.nutrition && (
        <div className="nutrition-info">
          <h3>Nutrition Facts:</h3>
          <p>Calories: {recipe.nutrition.calories}</p>
          <p>Fat: {recipe.nutrition.fat}</p>
          <p>Protein: {recipe.nutrition.protein}</p>
          <p>Carbs: {recipe.nutrition.carbs}</p>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
