import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../src/services/countries.js';
import CountryCard from '../components/CountryCard/CountryCard.js';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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

  return (
    <div>
      <div>
        <p className="error">{errorMessage}</p>
      </div>
      <div className="main">
        {countries.map((country) => (
          <CountryCard key={country.name} {...country} />
        ))}
      </div>
    </div>
  );
}
