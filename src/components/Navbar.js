// src/components/Navbar.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="navbar">
            {location.pathname !== "/" && ( // Show back button only if not on the first page
                <button className="back-button" onClick={handleBack}>
                    ← Back
                </button>
            )}
            <h1>Global Recipes</h1>
        </div>
    );
}

export default Navbar;
