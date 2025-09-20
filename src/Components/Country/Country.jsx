import React from 'react';
import './country.css'

const Country = ({ country }) => {
    // console.log(country.name.common)
    return (
        <div className='country'>
            <div>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            </div>
            <div>
                <h2>Name: {country.name.common} </h2>
                <h4>Region: {country.region.region} </h4>
                <p>Population: {country.population.population} </p>
                <p>Capital City: {country.capital.capital} </p>
            </div>
        </div>
    );
};

export default Country;