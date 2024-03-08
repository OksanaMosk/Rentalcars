import React, { useState } from 'react';
import makes from '../../json/makes.json';

import css from './Filter.module.css';

const Filter = ({
  onFilterChange,
  onPriceChange,
  filteredContacts,
  setFilteredContacts,
}) => {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');

  const handleMakeChange = event => {
    const selectedValue = event.target.value;
    setSelectedMake(selectedValue);
    onFilterChange(selectedValue);
  };

  const handlePriceChange = event => {
    const selectedValue = event.target.value;
    const numericPrice = parseFloat(selectedValue.replace('$', ''));

    if (!isNaN(numericPrice)) {
      setSelectedPrice(selectedValue); // Встановлюємо вибрану ціну

      const filteredByPrice = filteredContacts.filter(
        contact =>
          parseFloat(contact.rentalPrice.replace('$', '')) <= numericPrice
      );

      setFilteredContacts(filteredByPrice);
      onFilterChange(selectedMake, selectedValue); // Передаємо всі параметри у функцію onFilterChange
    }
  };

  const handleMinMileageChange = event => {
    const minMileageValue = event.target.value;
    if (!isNaN(minMileageValue)) {
      setFilteredContacts(minMileageValue);
    }
    setSelectedPrice(minMileageValue);
    onFilterChange(selectedMake, selectedPrice, minMileageValue, maxMileage);
  };

  const handleMaxMileageChange = event => {
    const maxMileageValue = event.target.value;
    if (!isNaN(maxMileageValue)) {
      setMaxMileage(maxMileageValue);
    }
    setSelectedPrice(maxMileageValue);
    onFilterChange(selectedMake, selectedPrice, minMileage, maxMileageValue);
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
            <option className={css.option} value="">
              All brands
            </option>
            {makes.map((make, index) => (
              <option className={css.brands} key={index} value={make}>
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
            <option value="30">$30</option>
            <option value="40">$40</option>
            <option value="50">$50</option>
            <option value="60">$60</option>
            <option value="70">$70</option>
            <option value="80">$80</option>
            <option value="90">$90</option>
            <option value="100">$100</option>
            <option value="150">$150</option>
            <option value="200">$200</option>
            <option value="250">$250</option>
            <option value="300">$300</option>
            <option value="350">$350</option>
            <option value="400">$400</option>
            <option value="450">$450</option>
            <option value="500">$500</option>
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
    </div>
  );
};

export default Filter;
