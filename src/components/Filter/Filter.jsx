import React, { useState } from 'react';
import makes from '../../json/makes.json';

import css from './Filter.module.css';

const Filter = ({ onAllFilterChange, allCars }) => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleMakeChange = event => {
    setSelectedMake(event.target.value);
  };

  const handlePriceChange = event => {
    setSelectedPrice(event.target.value);
  };

  const handleMinMileageChange = event => {
    setMinMileage(event.target.value);
  };

  const handleMaxMileageChange = event => {
    setMaxMileage(event.target.value);
  };

  const handleFilterClick = () => {
    const newFilters = {
      make: selectedMake,
      price: selectedPrice,
      minMileage: parseInt(minMileage),
      maxMileage: parseInt(maxMileage),
    };

    console.log('Selected make:', selectedMake);
    console.log('Selected  price:', selectedPrice);
    console.log('Selected make:', minMileage, maxMileage);
    onAllFilterChange(newFilters);
  };

  return (
    <div className={css.filterform}>
      <ul className={css.filterList}>
        <li className={css.filterLink}>
          <h2 className={css.brandTitle}>Car brand</h2>
          <select
            className={css.filterByBrand}
            value={selectedMake}
            onChange={handleMakeChange}
          >
            <option value="">All brands</option>
            {makes.map((make, index) => (
              <option key={index} value={make}>
                {make.charAt(0).toUpperCase() + make.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        </li>

        <li className={css.filterLink}>
          <h2 className={css.brandTitle}>Price/ 1 hour</h2>
          <select
            className={css.filterByPrice}
            value={selectedPrice}
            onChange={handlePriceChange}
          >
            <option value="">To $</option>
            {[
              30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300, 350, 400,
              450, 500,
            ].map((price, index) => (
              <option key={index} value={price}>
                ${price}
              </option>
            ))}
          </select>
        </li>

        <li className={css.filterLink}>
          <h2 className={css.brandTitle}>Car mileage / km</h2>
          <input
            type="number"
            placeholder="Min"
            value={minMileage}
            onChange={handleMinMileageChange}
          />
          <input
            type="number"
            placeholder="Max"
            value={maxMileage}
            onChange={handleMaxMileageChange}
          />
        </li>
      </ul>
      <button
        type="button"
        onClick={handleFilterClick}
        className={css.filterButton}
      >
        Search
      </button>
    </div>
  );
};

export default Filter;
