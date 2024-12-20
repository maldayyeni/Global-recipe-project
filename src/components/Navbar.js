// src/components/NavBar/NavBar.js

import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <h1>Global Recipe App</h1>
            <div className="nav-links">
                <a href="/">Home</a>
                <a href="/recipes">Recipes</a>
            </div>
        </nav>
    );
}

export default NavBar;
