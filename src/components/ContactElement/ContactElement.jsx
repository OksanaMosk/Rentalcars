// import LoaderSmall from 'components/Loader/LoaderSmall';

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contacts.reducer';

// import { selectContacts } from 'redux/contacts/contacts.selector';
// import { useEffect } from 'react';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import css from './ContactElement.module.css';

export const ContactElement = ({
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
  filterTerm, // Додайте проп для фільтрації
}) => {
  const partsOfAddress = address.split(', ');
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (
    filterTerm &&
    !make.toLowerCase().includes(filterTerm.toString().toLowerCase())
  ) {
    return null;
  }

  return (
    <li
      className={`${css.itemHome} ${imageLoaded ? css.imageLoaded : ''}`}
      key={id}
    >
      <div style={{ width: '274px', height: '268px', overflow: 'hidden' }}>
        <img
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
//  return <p className={css.noFound}>No found cars of this brand </p>;
