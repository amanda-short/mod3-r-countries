import React, { useState } from 'react';
// import { fetchCountries } from '../../src/services/countries.js';
import CountryCard from '../components/CountryCard/CountryCard.js';
import { useCountries } from '../Hooks/useCountries.js';
import './Main.css';

export default function Main() {
  const { countries, errorMessage, loading } = useCountries();
  const [continent, setContinent] = useState('All');

  const options = [
    'All',
    'Oceania',
    'Europe',
    'Africa',
    'North America',
    'Antarctica',
    'South America',
    'Asia',
  ];

  const filterCountries = () => {
    return countries.filter((country) => country.continent === continent || continent === 'All');
  };

  if (loading && !errorMessage) {
    return <p className="Loading"></p>;
  }

  return (
    <div>
      <p className="error" style={{ color: 'red' }}>
        {errorMessage}
      </p>
      <div className="options">
        <select onChange={(e) => setContinent(e.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="main">
        {filterCountries().map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
    </div>
  );
}
