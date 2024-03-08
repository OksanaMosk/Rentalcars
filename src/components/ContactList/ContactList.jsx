import React from 'react';

import { ContactElement } from '../ContactElement/ContactElement';

import css from './ContactList.module.css';

export const ContactList = ({ contacts, filterTerm }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.make.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <div className={css.homeContainer}>
      <ul className={css.homeList}>
        {filteredContacts.map(contact => (
          <ContactElement key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
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
