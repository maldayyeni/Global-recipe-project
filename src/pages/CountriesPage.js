// src/pages/CountriesPage.js
import React, { useState } from 'react';
import './CountriesPage.css';

const countries = [
    {
        name: "Italy",
        flag: "https://flagcdn.com/w320/it.png",
        dishImage: "https://images.unsplash.com/photo-1604908177520-472e9a7b7c8b",
        dishName: "Pizza",
    },
    {
        name: "India",
        flag: "https://flagcdn.com/w320/in.png",
        dishImage: "https://images.unsplash.com/photo-1627332385566-9e6d56c76cd8",
        dishName: "Butter Chicken",
    },
    {
        name: "Japan",
        flag: "https://flagcdn.com/w320/jp.png",
        dishImage: "https://images.unsplash.com/photo-1562967916-eb82221dfb36",
        dishName: "Sushi",
    },
    // Add more countries here
];

function CountriesPage({ onSelectCountry }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="countries-page">
            <h2>Select a Country</h2>
            <input
                type="text"
                placeholder="Search for a country..."
                className="search-bar"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="countries-list">
                {filteredCountries.map((country) => (
                    <div
                        key={country.name}
                        className="country-card"
                        onClick={() => onSelectCountry(country.name)}
                    >
                        <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
                        <img src={country.dishImage} alt={country.dishName} className="country-dish" />
                        <h3>{country.name}</h3>
                        <p>Famous Dish: {country.dishName}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountriesPage;
