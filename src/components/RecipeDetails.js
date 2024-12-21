import React from "react";
import { useParams } from "react-router-dom";
import recipesData from "../data/recipesData";
import "./RecipeDetails.css";

function RecipeDetails() {
    const { recipeName } = useParams();
    const recipe = Object.values(recipesData)
        .flat()
        .find((r) => r.name === recipeName);

    if (!recipe) return <div>Recipe not found!</div>;

    return (
        <div className="recipe-details">
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} />
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
        </div>
    );
}

export default RecipeDetails;
