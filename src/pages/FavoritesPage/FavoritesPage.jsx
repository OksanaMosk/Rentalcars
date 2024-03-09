import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectFavorites } from 'redux/favorites/favorites.selector';

import { CarElement } from '../../components/CarElement/CarElement';
import Loader from 'components/Loader/Loader';

import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavorites);
  console.log('Favorite cars:', favoriteCars);

  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/';

  useEffect(() => {
    console.log('Inside useEffect');
    if (favoriteCars && favoriteCars.favorites) {
      console.log('Favorites loaded:', favoriteCars.favorites);
      setLoading(false);
    } else if (favoriteCars === undefined) {
      console.log('Favorites not loaded yet');
    }
  }, [favoriteCars]);

  console.log('Loading:', loading);

  return (
    <>
      <NavLink className={css.goBack} to={backLinkRef}>
        Go back
      </NavLink>
      <div className={css.favoritesContainer}>
        <h2>Favorite Cars</h2>
        {loading ? (
          <Loader />
        ) : (
          <>
            {favoriteCars &&
            favoriteCars.favorites &&
            favoriteCars.favorites.length > 0 ? (
              favoriteCars.favorites.map(car => (
                <CarElement key={car.id} {...car} />
              ))
            ) : (
              <p>Your favorites are currently empty...</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default FavoritesPage;
