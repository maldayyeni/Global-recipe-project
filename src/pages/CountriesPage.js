import React from "react";
import countriesData from "../data/countriesData";
import "./CountriesPage.css";
import { Link } from "react-router-dom";

function CountriesPage() {
    return (
        <div className="countries-page">
            <h2>Select a Country</h2>
            <div className="countries-grid">
                {countriesData.map((country) => (
                    <Link to={`/recipes/${country.name}`} key={country.name}>
                        <div className="country-card">
                            <img src={country.image} alt={country.name} />
                            <h3>{country.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CountriesPage;
