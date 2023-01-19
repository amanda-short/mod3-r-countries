// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../services/countries.js';

export function useCountries() {
  const [countries, setCountries] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setLoading(false);
        setCountries(resp);
      } catch (errorMessage) {
        setErrorMessage('Unable to find what you asked for...please refresh the page.');
      }
    };
    fetchData();
  }, []);

  return { countries, errorMessage, loading };
}
