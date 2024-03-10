import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { selectFavorites } from 'redux/favorites/favorites.selector';
import { CarElement } from '../../components/CarElement/CarElement';
import Loader from '../../components/Loader/Loader';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const [loading, setLoading] = useState(true);
  const [favoriteCars, setFavoriteCars] = useState([]);

  const location = useLocation();
  const backLinkRef = location.state?.from ?? '/';

  const favoriteCarsRedux = useSelector(selectFavorites);

  useEffect(() => {
    // Перевірка, чи є дані в Redux
    if (favoriteCarsRedux && favoriteCarsRedux.length > 0) {
      setFavoriteCars(favoriteCarsRedux);
      setLoading(false);
    } else {
      // Якщо немає даних в Redux, отримуємо їх з локального сховища
      const storedFavoritesFromLocalStorage = localStorage.getItem('favorites');
      if (storedFavoritesFromLocalStorage) {
        const parsedFavorites = JSON.parse(storedFavoritesFromLocalStorage);
        setFavoriteCars(parsedFavorites);
      }
      setLoading(false);
    }
  }, [favoriteCarsRedux]);

  const clearLocalStorage = () => {
    localStorage.removeItem('favorites');
    console.log('Local storage cleared');
    setFavoriteCars([]); // Очищення стану компонента
  };

  const handleAddToFavorites = carData => {
    // Перевірка, чи елемент вже присутній у списку улюблених автомобілів
    if (!favoriteCars.some(car => car.id === carData.id)) {
      setFavoriteCars(prevFavorites => [...prevFavorites, carData]);
    }
  };

  // Фільтрація унікальних автомобілів за їх ідентифікаторами
  const uniqueFavoriteCars = favoriteCars.reduce((acc, current) => {
    const isCarExists = acc.some(car => car.id === current.id);
    if (!isCarExists) {
      return [...acc, current];
    }
    return acc;
  }, []);

  return (
    <>
      <NavLink className={css.goBack} to={backLinkRef}>
        Go back
      </NavLink>
      <div className={css.favoritesContainer}>
        <h2>Favorite Cars</h2>
        <button
          onClick={clearLocalStorage}
          style={{
            display: 'block',
            margin: '20px auto',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Clear Local Storage
        </button>
        {loading ? (
          <Loader />
        ) : (
          <>
            {uniqueFavoriteCars.length > 0 ? (
              uniqueFavoriteCars.map(car => (
                <CarElement
                  key={car.id}
                  {...car}
                  onAddToFavorites={() => handleAddToFavorites(car)}
                />
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
