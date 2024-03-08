import React, { useState } from 'react';
import makes from '../../json/makes.json';

import css from './Filter.module.css';

const Filter = ({ onFilterChange }) => {
  const [selectedMake, setSelectedMake] = useState('');

  const handleMakeChange = event => {
    const selectedValue = event.target.value;
    setSelectedMake(selectedValue);
    onFilterChange(selectedValue);
  };

  return (
    <div className={css.filterform}>
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
    </div>
  );
};

export default Filter;
