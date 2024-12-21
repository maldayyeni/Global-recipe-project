import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CountriesPage from "./pages/CountriesPage";
import RecipeListPage from "./pages/RecipeListPage";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesPage from "./pages/FavoritesPage";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<CountriesPage />} />
                    <Route path="/recipes/:country" element={<RecipeListPage />} />
                    <Route path="/recipe/:recipeName" element={<RecipeDetails />} />
                    <Route path="/favorites" element={<FavoritesPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
