import React, { useState } from 'react';
import CountriesPage from './pages/CountriesPage';
import RecipeListPage from './pages/RecipeListPage';
import RecipeDetails from './components/RecipeDetails';
import GrocerySuggestions from './components/GrocerySuggestions';
import ShoppingAssistant from './components/ShoppingAssistant';
import './App.css';

function App() {
    const [selectedPage, setSelectedPage] = useState('countries');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const renderPage = () => {
        if (selectedRecipe) {
            return <RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />;
        }
        if (selectedCountry) {
            return (
                <RecipeListPage
                    country={selectedCountry}
                    onBack={() => setSelectedCountry(null)}
                    onSelectRecipe={(recipe) => setSelectedRecipe(recipe)}
                />
            );
        }
        switch (selectedPage) {
            case 'groceries':
                return <GrocerySuggestions />;
            case 'shopping':
                return <ShoppingAssistant />;
            default:
                return <CountriesPage onSelectCountry={setSelectedCountry} />;
        }
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1 className="app-title">Global Recipe App</h1>
                <nav className="nav-buttons">
                    <button onClick={() => setSelectedPage('countries')}>🌍 Countries</button>
                    <button onClick={() => setSelectedPage('groceries')}>🍎 Groceries</button>
                    <button onClick={() => setSelectedPage('shopping')}>🛒 Shopping</button>
                </nav>
            </header>
            <main>{renderPage()}</main>
        </div>
    );
}

export default App;
