import { ContactElement } from '../ContactElement/ContactElement';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts.reducer';
// import { useParams } from 'react-router-dom';
import { selectContacts } from 'redux/contacts/contacts.selector';
// import { selectFilterTerm } from 'redux/filter/filter.selector';
import { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

import css from './ContactList.module.css';

export const ContactList = id => {
  const listResults = useSelector(selectContacts);
  console.log('listResults before dispatch:', listResults);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  console.log('listResults after dispatch:', listResults);

  return (
    listResults &&
    listResults.length > 0 && (
      <div className={css.homeContainer}>
        <ul className={css.homeList}>
          <ContactElement key={id} />
        </ul>
      </div>
    )
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
