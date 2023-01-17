import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="card">
      <h5>{name}</h5>
      <img alt={name} height="100px" src={`https://flagcdn.com/w20/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
