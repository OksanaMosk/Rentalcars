import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { selectFavorites } from 'redux/favorites/favorites.selector';

import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  // const favoriteCars = useSelector(selectFavorites);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  // useEffect(() => {
  //   const initialCars = favoriteCars.favorites.slice(0, 8);
  //   setCars(initialCars);
  // }, [favoriteCars]);

  return (
    <>
      <NavLink className={css.goBack} to={backLinkRef.current}>
        Go back
      </NavLink>
      <div className={css.favoritesContainer}>
        {/* <div>
          {cars.length ? (
            cars.map((favorite, index) => (
              <CarItem key={index} data={favorite} />
            ))
          ) : (
            <Text>Your favorites are currently empty...</Text>
          )}
          {favoriteCars.favorites.length > cars.length && (
            <LoadMore variant="text" onClick={loadMore}>
              Load more
            </LoadMore>
          )}
        </div> */}
      </div>
    </>
  );
};
export default FavoritesPage;
