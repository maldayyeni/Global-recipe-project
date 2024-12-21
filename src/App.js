import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CountriesPage from "./pages/CountriesPage";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesPage from "./pages/FavoritesPage";
import recipesData from "./data/recipesData";

function App() {
  const [currentCountry, setCurrentCountry] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (recipe) => {
    setFavorites((prevFavorites) =>
      prevFavorites.some((fav) => fav.name === recipe.name)
        ? prevFavorites.filter((fav) => fav.name !== recipe.name)
        : [...prevFavorites, recipe]
    );
  };

  return (
    <div className="App">
      <Navbar onCountrySelect={setCurrentCountry} />
      {!currentCountry && !selectedRecipe && (
        <CountriesPage onSelectCountry={setCurrentCountry} />
      )}
      {currentCountry && !selectedRecipe && (
        <RecipeListPage
          recipes={recipesData[currentCountry]}
          onRecipeSelect={setSelectedRecipe}
          onFavoriteToggle={toggleFavorite}
          favorites={favorites}
        />
      )}
      {selectedRecipe && (
        <RecipeDetails
          recipe={selectedRecipe}
          onBack={() => setSelectedRecipe(null)}
        />
      )}
      {!currentCountry && !selectedRecipe && (
        <FavoritesPage
          favorites={favorites}
          onRecipeSelect={setSelectedRecipe}
        />
      )}
    </div>
  );
}

export default App;
