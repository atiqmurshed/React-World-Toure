import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './country.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountris, setVisitedCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited this country');
        visitedCountris.push(country);
        const newVisitedCountris = [...visitedCountris, country];
        setVisitedCountries(newVisitedCountris);
    }


    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>visited countries: {visitedCountris.length}</h5>
                <ul>
                    {
                        visitedCountris.map(country => <li key={country.cca3}> {country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="country-container">
                {
                    countries.map(country => <Country key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}> </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;