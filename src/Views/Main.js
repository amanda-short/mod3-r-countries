import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../../src/services/countries.js';
import CountryCard from '../components/CountryCard/CountryCard.js';
import './Main.css';

export default function Main() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </div>
  );
}
