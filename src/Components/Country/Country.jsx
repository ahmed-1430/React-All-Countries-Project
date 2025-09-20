import React from 'react';

const Country = ({country}) => {
    console.log(country.name.common)
    return (
        <div>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common} </h2>
        </div>
    );
};

export default Country;