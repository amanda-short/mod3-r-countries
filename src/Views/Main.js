import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../src/services/countries.js';
import CountryCard from '../components/CountryCard/CountryCard.js';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (e) {
        setErrorMessage('Unable to find what you asked for...please refresh the page.');
      }
    };
    fetchData();
  }, []);

  const filterCountries = () => {
    return countries.filter((country) => country.continent === continent || continent === 'All');
  };

  return (
    <div>
      <p className="error">{errorMessage}</p>
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
