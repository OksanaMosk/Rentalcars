// import LoaderSmall from 'components/Loader/LoaderSmall';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts.reducer';

import { selectContacts } from 'redux/contacts/contacts.selector';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import css from './ContactElement.module.css';

export const ContactElement = () => {
  // const isLoading = useSelector(state => state.contactsStore.isLoading);
  // const error = useSelector(state => state.contactsStore.error);
  const listResults = useSelector(selectContacts);
  console.log('listResults before dispatch:', listResults);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log('listResults after dispatch:', listResults);

  return (
    listResults &&
    listResults.length > 0 &&
    listResults.map(
      ({
        id,
        year,
        make,
        model,
        type,
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
      }) => (
        <li className={css.itemHome} key={id}>
          <div className={css.everyItem}>
            {/* {result.img && (
                  <img
                    src={result.img}
                    alt={`House ${result.id}`}
                    style={{ width: 'auto', maxHeight: '250px' }}
                  />
                )} */}
            <div className={css.about}>
              <p className={css.price}>{year}</p>
              <p className={css.price}>{make}</p>
              <p className={css.price}>{model}</p>
              <p className={css.price}>{type}</p>
              <p className={css.price}>{description}</p>
              <p className={css.price}>{fuelConsumption}</p>
              <p className={css.price}>{engineSize}</p>
              <p className={css.price}>{accessories}</p>
              {Array.isArray(functionalities) &&
                functionalities.map(func => (
                  <p className={css.price}>{func}</p>
                ))}
              <p className={css.price}>{rentalPrice}</p>
              <p className={css.price}>{rentalCompany}</p>
              <p className={css.price}>{rentalConditions}</p>
              <p className={css.price}>{mileage}</p>
              <p
                className={css.address}
                style={{
                  whiteSpace: 'pre-wrap',
                  maxWidth: '25ch',
                  overflowWrap: 'break-word',
                }}
              >
                {address.replace(/,([^,]{0,10})$/, ',\u00A0$1')}
              </p>
              <div className={css.aboutDetails}></div>
              <NavLink className={css.toHomeElement} key={id} to={`/buy/${id}`}>
                View details
              </NavLink>
            </div>
            {/* 
                {isLoading && <LoaderSmall />}
                {error !== null && <>{error}</>} */}
          </div>
        </li>
      )
    )
  );
};
