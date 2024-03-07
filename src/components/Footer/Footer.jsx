import { NavLink } from 'react-router-dom';

import css from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.aboutUsInfo}></div>

      <div className={css.footerNav}>
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
    </div>
  );
};