import React from "react";
import { useParams, Link } from "react-router-dom";
import recipesData from "../data/recipesData";
import "./RecipeListPage.css";

function RecipeListPage() {
    const { country } = useParams();
    const recipes = recipesData[country] || [];

    return (
        <div className="recipe-list-page">
            <h2>{country} Recipes</h2>
            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <Link to={`/recipe/${recipe.name}`} key={recipe.name}>
                        <div className="recipe-card">
                            <img src={recipe.image} alt={recipe.name} />
                            <h3>{recipe.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RecipeListPage;
