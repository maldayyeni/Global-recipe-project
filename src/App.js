import React, { useState } from 'react';
import CountriesPage from './pages/CountriesPage';
import RecipeListPage from './pages/RecipeListPage';
import RecipeDetails from './components/RecipeDetails';
import GrocerySuggestions from './components/GrocerySuggestions';
import ShoppingAssistant from './components/ShoppingAssistant';
import recipesData from './data/recipesData';
import './App.css';

function App() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [viewGroceries, setViewGroceries] = useState(false);
    const [viewShopping, setViewShopping] = useState(false);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setSelectedRecipe(null);
        window.scrollTo(0, 0); // Fix scrolling issue
    };

    const handleRecipeSelect = (recipe) => {
        setSelectedRecipe(recipe);
        window.scrollTo(0, 0); // Fix scrolling issue
    };

    const handleBack = () => {
        if (selectedRecipe) {
            setSelectedRecipe(null);
        } else if (viewGroceries) {
            setViewGroceries(false);
        } else if (viewShopping) {
            setViewShopping(false);
        } else {
            setSelectedCountry(null);
        }
        window.scrollTo(0, 0); // Fix scrolling issue
    };

    return (
        <div className="App">
            {viewShopping ? (
                <ShoppingAssistant onBack={handleBack} />
            ) : viewGroceries ? (
                <GrocerySuggestions onBack={handleBack} />
            ) : selectedRecipe ? (
                <RecipeDetails recipe={selectedRecipe} onBack={handleBack} />
            ) : selectedCountry ? (
                <RecipeListPage
                    country={selectedCountry}
                    recipes={recipesData[selectedCountry] || []}
                    onBack={handleBack}
                    onSelectRecipe={handleRecipeSelect}
                />
            ) : (
                <CountriesPage onSelectCountry={handleCountrySelect} />
            )}
        </div>
    );
}

export default App;
