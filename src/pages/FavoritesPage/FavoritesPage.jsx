import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectFavorites } from 'redux/favorites/favorites.selector';

import { CarElement } from '../../components/CarElement/CarElement';
import Loader from 'components/Loader/Loader';

import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavorites);

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;
  const [page, setPage] = useState(1);
  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/';
  const [cars, setCars] = useState([]);

  const loadMore = () => {
    const startIndex = page * 12;
    const nextCars = favoriteCars.favorites.slice(startIndex, startIndex + 12);
    setCars([...cars, ...nextCars]);
    setPage(page + 1);
  };

  useEffect(() => {
    const initialCars = favoriteCars.favorites.slice(0, 12);
    setCars(initialCars);
  }, [favoriteCars]);

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
            {cars.length ? (
              cars.map(id => <CarElement key={id} />)
            ) : (
              <p>Your favorites are currently empty...</p>
            )}

            {favoriteCars.favorites.length > cars.length && (
              <button variant="text" onClick={loadMore}>
                Load more
              </button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default FavoritesPage;
