import React, { useState } from 'react';
import './CountriesPage.css';

const countries = [
    {
        id: 1,
        name: 'Italy',
        flag: 'https://flagcdn.com/w320/it.png',
        dishImage: 'https://images.unsplash.com/photo-1604908177520-472e9a7b7c8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        famousDish: 'Pizza',
    },
    {
        id: 2,
        name: 'India',
        flag: 'https://flagcdn.com/w320/in.png',
        dishImage: 'https://images.unsplash.com/photo-1600628422011-9d8dfb1d2c4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
        famousDish: 'Butter Chicken',
    },
    // Add more countries here...
];

function CountriesPage({ onSelectCountry }) {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="countries-page">
            <h2>Explore Recipes by Country</h2>
            <input
                type="text"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />
            <div className="countries-list">
                {filteredCountries.map((country) => (
                    <div
                        key={country.id}
                        className="country-card"
                        onClick={() => onSelectCountry(country.name)}
                    >
                        <img src={country.dishImage} alt={country.famousDish} className="dish-image" />
                        <div className="country-info">
                            <h3>{country.name}</h3>
                            <p>{country.famousDish}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountriesPage;
