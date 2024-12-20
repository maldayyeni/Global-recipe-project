// src/App.js

import React, { useState, useEffect } from 'react';
import CountriesPage from './pages/CountriesPage';
import RecipeListPage from './pages/RecipeListPage';
import RecipeDetails from './components/RecipeDetails';
import GrocerySuggestions from './components/GrocerySuggestions';
import ShoppingAssistant from './components/ShoppingAssistant';
import NotificationDot from './components/NotificationDot/NotificationDot';
import recipesData from './data/recipesData';
import './App.css';

function App() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [viewGroceries, setViewGroceries] = useState(false);
    const [viewShopping, setViewShopping] = useState(false);
    const [groceryCount, setGroceryCount] = useState(0);
    const [shoppingCount, setShoppingCount] = useState(0);
    const [showGroceryNotification, setShowGroceryNotification] = useState(false);
    const [showShoppingNotification, setShowShoppingNotification] = useState(false);

    // Load counts from local storage on initial render
    useEffect(() => {
        const storedGroceryCount = parseInt(localStorage.getItem('groceryCount')) || 0;
        const storedShoppingCount = parseInt(localStorage.getItem('shoppingCount')) || 0;
        setGroceryCount(storedGroceryCount);
        setShoppingCount(storedShoppingCount);
        setShowGroceryNotification(storedGroceryCount > 0);
        setShowShoppingNotification(storedShoppingCount > 0);
    }, []);

    // Update local storage whenever counts change
    useEffect(() => {
        localStorage.setItem('groceryCount', groceryCount);
    }, [groceryCount]);

    useEffect(() => {
        localStorage.setItem('shoppingCount', shoppingCount);
    }, [shoppingCount]);

    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setSelectedRecipe(null);
    };

    const handleRecipeSelect = (recipe) => {
        setSelectedRecipe(recipe);
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
    };

    const toggleGroceriesPage = () => {
        setViewGroceries(!viewGroceries);
        setViewShopping(false);
    };

    const toggleShoppingPage = () => {
        setViewShopping(!viewShopping);
        setViewGroceries(false);
    };

    // Functions to manage grocery count
    const incrementGroceryCount = () => {
        setGroceryCount(prevCount => prevCount + 1);
        setShowGroceryNotification(true);
    };

    const decrementGroceryCount = () => {
        setGroceryCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
        if (groceryCount - 1 === 0) {
            setShowGroceryNotification(false);
        }
    };

    const handleGroceryNotificationClose = () => {
        setShowGroceryNotification(false);
    };

    // Functions to manage shopping count
    const incrementShoppingCount = () => {
        setShoppingCount(prevCount => prevCount + 1);
        setShowShoppingNotification(true);
    };

    const decrementShoppingCount = () => {
        setShoppingCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
        if (shoppingCount - 1 === 0) {
            setShowShoppingNotification(false);
        }
    };

    const handleShoppingNotificationClose = () => {
        setShowShoppingNotification(false);
    };

    return (
        <div className="App">
            {viewShopping ? (
                <ShoppingAssistant
                    recipes={Object.values(recipesData).flat()}
                    incrementShoppingCount={incrementShoppingCount}
                    decrementShoppingCount={decrementShoppingCount}
                />
            ) : viewGroceries ? (
                <GrocerySuggestions
                    recipes={Object.values(recipesData).flat()}
                    incrementGroceryCount={incrementGroceryCount}
                    decrementGroceryCount={decrementGroceryCount}
                />
            ) : selectedRecipe ? (
                <RecipeDetails recipe={selectedRecipe} onBack={handleBack} />
            ) : selectedCountry ? (
                <RecipeListPage
                    recipes={recipesData[selectedCountry]}
                    onSelectRecipe={handleRecipeSelect}
                />
            ) : (
                <CountriesPage
                    onSelectCountry={handleCountrySelect}
                />
            )}

            <div className="navigation-buttons">
                {!viewGroceries && !viewShopping && !selectedCountry && (
                    <>
                        <button onClick={toggleGroceriesPage} className="groceries-button">
                            Enter Groceries
                            {showGroceryNotification && (
                                <NotificationDot count={groceryCount} onClose={handleGroceryNotificationClose} />
                            )}
                        </button>
                        <button onClick={toggleShoppingPage} className="shopping-button" style={{ marginLeft: '10px' }}>
                            Shopping Assistant
                            {showShoppingNotification && (
                                <NotificationDot count={shoppingCount} onClose={handleShoppingNotificationClose} />
                            )}
                        </button>
                    </>
                )}
                {(viewGroceries || viewShopping || selectedCountry) && (
                    <button onClick={handleBack} style={{ marginLeft: '10px' }}>Back</button>
                )}
            </div>
        </div>
    );
}

export default App;
