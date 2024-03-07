// import { useParams } from 'react-router-dom';
// import { selectFilterTerm } from 'redux/filter/filter.selector';
// import { NavLink } from 'react-router-dom';

import { ContactElement } from '../ContactElement/ContactElement';
import { useSelector } from 'react-redux';
import React from 'react';
import { selectContacts } from 'redux/contacts/contacts.selector';

import css from './ContactList.module.css';

export const ContactList = () => {
  const listResults = useSelector(selectContacts);

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