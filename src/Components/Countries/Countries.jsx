import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise)
    const [visitedCountry, setVisitedCountry] = useState([]);
    const handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountry, country]
        setVisitedCountry(newVisitedCountries) 
        console.log('button clicked', country)
    }
    const countries = countriesData.countries
    // console.log(countries);
    return (
        <div>
            <h1>Total Countries: {countries.length}</h1>
            <p>Total Visited Country: {visitedCountry.length} </p>
            <ol>
                <h3>Visited Country Name:</h3>
                {
                    visitedCountry.map(country => <li> {country.name.common} </li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country =>
                        <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} >

                        </Country>)
                }
            </div>


        </div>
    );
};

export default Countries;