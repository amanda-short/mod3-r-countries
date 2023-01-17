import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, image }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img alt={name} height="100px" src={image} />
    </div>
  );
}
