
import { useState } from 'react';
import './Country.css'
   
const Country = ({ country, handleVisitedCountry}) => {
 
    const {name, flags, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }




     return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Country</button>
            <button onClick={handleVisited}>{ visited ? 'visited' : 'going'}</button>
            {visited ?'I have visited country': 'I want to visited'}
        </div>
    );
};

export default Country;