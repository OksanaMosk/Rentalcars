import { ContactElement } from '../ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts.reducer';
// import { useParams } from 'react-router-dom';
import { selectContacts } from 'redux/contacts/contacts.selector';
// import { selectFilterTerm } from 'redux/filter/filter.selector';

// import { NavLink } from 'react-router-dom';

import css from './ContactList.module.css';

export const ContactList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const listResults = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts({ page: currentPage, limit: 12 }));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <div className={css.homeContainer}>
        <ul className={css.homeList}>
          {listResults &&
            listResults.map(contact => (
              <ContactElement key={contact.id} {...contact} />
            ))}
        </ul>
      </div>
      <button className={css.button} onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
};
// const id = useParams();

// const filterTerm = useSelector(selectFilterTerm);

// const mpDelete = 'https://audio.code.org/goal2.mp3';

// const visibleContacts = () => {
//   return contacts.filter(contact =>
//     contact.name
//       .toString()
//       .toLowerCase()
//       .includes(filterTerm.toString().toLowerCase())
//   );
// };

// const visContacts = visibleContacts();
// const sorted = [...visContacts].sort((a, b) =>
//   a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
// );
