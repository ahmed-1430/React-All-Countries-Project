import React, { use, useState } from 'react';
import './country.css'

const Country = ({ country }) => {
    const [Visited, setVisited] = useState(false);
    const handleBtn = () => {
        setVisited(Visited ? false : true)
    }
    return (
        <div className={`country ${Visited && 'country-visited'}`}>
            <div>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            </div>
            <div>
                <h2>Name: {country.name.common} </h2>
                <h4>Region: {country.region.region} </h4>
                <p>Population: {country.population.population} </p>
                <p>Capital City: {country.capital.capital} </p>
                <button onClick={handleBtn} > {Visited ? 'Visited' : 'Not Visited'} </button>
            </div>
        </div>
    );
};

export default Country;