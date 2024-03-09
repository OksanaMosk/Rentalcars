import React from 'react';
import { ContactElement } from '../ContactElement/ContactElement';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, filterTerm, filterBrand }) => {
  // Фільтрація контактів за ціною та брендом
  const filteredContacts = contacts.filter(
    contact =>
      (filterTerm ? contact.rentalPrice <= filterTerm : true) &&
      (filterBrand
        ? contact.make.toLowerCase() === filterBrand.toLowerCase()
        : true)
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
