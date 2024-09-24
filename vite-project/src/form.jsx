import React, { useState } from 'react';
import './App.css'; 

function CityForm() {
  const [city, setCity] = useState('');
  const [cityList, setCityList] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = city.trim();
    if (!newCity) {
      setError('City name cannot be empty.');
      return;
    }
    if (cityList.includes(newCity)) {
      setError('City already exists');
      return;
    }
    setCityList([...cityList,newCity]);
    setCity('');
    setError('');
  };

  return (
    <div className="outer-city-form">
      <form onSubmit={handleSubmit} className="city-form">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="city-input"
        />
        <button type="submit" className="add-city">
          Add City
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      <ul className="city-list">
        {cityList.map((cityName, index) => (
          <li key={index} className="city-item">
            {cityName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityForm;
