import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectFavorites } from 'redux/favorites/favorites.selector';

import {
  addFavorite,
  removeFavorite,
} from '../../redux/favorites/favorites.reducer';
import noFavor from '../../images/noFavor.png';
import favor from '../../images/favor.png';

import css from './CarElement.module.css';

export const CarElement = ({
  id,
  year,
  make,
  model,
  type,
  img,
  accessories,
  rentalPrice,
  rentalCompany,
  address,
  filterTerm,
}) => {
  const partsOfAddress = address.split(', ');
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleAddToFavorites = () => {
    console.log('isFavorite:', isFavorite);
    const carData = {
      id,
      year,
      make,
      model,
      type,
      img,
      accessories,
      rentalPrice,
      rentalCompany,
      address,
    };

    if (!isFavorite) {
      console.log('Adding to favorites:', carData);
      dispatch(addFavorite(carData));
      setIsFavorite(true);
    } else {
      console.log('Removing from favorites, id:', id);
      dispatch(removeFavorite(id));
      setIsFavorite(false);
    }
  };

  return (
    <li
      className={`${css.itemHome} ${imageLoaded ? css.imageLoaded : ''}`}
      key={id}
    >
      <button onClick={handleAddToFavorites} type="button">
        <img
          className={isFavorite ? css.favorIcon : css.noFavorIcon}
          src={isFavorite ? favor : noFavor}
          alt="favorite"
          width={18}
          height={16}
        />
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>

      <div style={{ width: '274px', height: '268px', overflow: 'hidden' }}>
        <img
          className={css.img}
          src={img}
          alt={`Car ${id}`}
          onLoad={handleImageLoad}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div className={css.titlePart}>
        <h3 className={css.title}>
          {make} {model && <span className={css.title}>{model},</span>} {year}
        </h3>
        <p className={css.title}>{rentalPrice}</p>
      </div>
      <div className={css.aboutPart}>
        <p>{partsOfAddress[1]}</p>|<p>{partsOfAddress[2]}</p>|
        <p className={css.price}>
          {rentalCompany === 'Adventure Car Rentals' ||
          rentalCompany === 'Economy Car Rentals' ||
          rentalCompany === 'Supreme Car Rentals' ||
          rentalCompany === 'Classic Car Rentals'
            ? rentalCompany.replace('Rentals', '')
            : rentalCompany}
        </p>
        |<p className={css.price}>Premium</p>
      </div>
      <div className={css.aboutPart}>
        <p className={css.price}>{type}</p>|<p className={css.price}>{model}</p>
        |<p className={css.price}>{id}</p>|
        {Array.isArray(accessories) && (
          <p className={css.price}>
            {accessories.reduce(current => {
              if (current.length > 25) {
                return current.slice(0, current.lastIndexOf(' ', 25));
              } else {
                return current;
              }
            }, accessories[0])}
          </p>
        )}
      </div>
      <NavLink className={css.button} key={id} to={`/buy/${id}`}>
        Learn more
      </NavLink>
    </li>
  );
};
