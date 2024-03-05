// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { selectAuthenticated } from 'redux/auth/auth.selectors';
// import { selectUserData } from 'redux/auth/auth.selectors';
// import { logOutThunk } from 'redux/auth/auth.reducer';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  // const userData = useSelector(selectUserData);
  // const location = useLocation();
  // const dispatsh = useDispatch();
  // const authenticated = useSelector(selectAuthenticated);

  // const onLogOut = () => {
  //   dispatsh(logOutThunk());
  // };

  return (
    <div className={css.mainTitleContainer}>
      <header>
        <div className={css.links}>
          <NavLink
            className={css.toLink}
            // state={{ from: location }}
            to="/catalog"
          >
            Catalog
          </NavLink>
          <NavLink
            className={css.toLink}
            // state={{ from: location }}
            to="/favorites"
          >
            Faforites cars
          </NavLink>
        </div>
        <div className={css.mainTit}>
          <h1 className={css.mainTitle}>
            {/* <img
              src={zillow}
              alt="zillow"
              style={{ width: '40px', height: '40px' }}
            /> */}
            Rentalcars
          </h1>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
