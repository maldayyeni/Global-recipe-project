// src/pages/CountriesPage.js

import React from 'react';
import countriesData from '../data/countriesData';
import './CountriesPage.css';

function CountriesPage({ onSelectCountry }) {
    return (
        <div className="countries-page">
            <h1>Select a Country</h1>
            <div className="countries-grid">
                {countriesData.map(country => (
                    <div
                        key={country.id}
                        className="country-card"
                        onClick={() => onSelectCountry(country.name)}
                    >
                        <img src={country.foodImage} alt={country.representativeFood} className="country-food-image" />
                        <div className="country-info">
                            <h3>{country.name}</h3>
                            <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CountriesPage;
