// import LoaderSmall from 'components/Loader/LoaderSmall';

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from 'redux/contacts/contacts.reducer';

// import { selectContacts } from 'redux/contacts/contacts.selector';
// import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import css from './ContactElement.module.css';

export const ContactElement = ({
  id,
  year,
  make,
  model,
  type,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  rentalConditions,
  mileage,
  address,
}) => {
  const partsOfAddress = address.split(', ');
  // const partsOfAccessories = accessories.split(', ');

  return (
    <li className={css.itemHome} key={id}>
      <div style={{ width: '274px', height: '268px', overflow: 'hidden' }}>
        <img
          src={img}
          alt={`Car ${id}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div>
        <p className={css.price}>{make}</p>
        <p className={css.price}>{year}</p>
        <p className={css.price}>{rentalPrice}</p>
      </div>

      <div className={css.everyItem}>
        <div className={css.about}>
          <p>{partsOfAddress[1]}</p>
          <p>{partsOfAddress[2]}</p>
          <p className={css.price}>{rentalCompany}</p>
          <p className={css.price}>Premium</p>
        </div>

        <div className={css.about}>
          <p className={css.price}>{type}</p>
          <p className={css.price}>{model}</p>
          <p className={css.price}>{id}</p>
          {Array.isArray(accessories) &&
            accessories.slice(0, 1).map((item, index) => (
              <p className={css.price} key={index}>
                {item}
              </p>
            ))}
        </div>

        {/* {isLoading && <LoaderSmall />}
        {error !== null && <>{error}</>}  */}

        <NavLink className={css.button} key={id} to={`/buy/${id}`}>
          Learn more
        </NavLink>
      </div>
    </li>
  );
};
