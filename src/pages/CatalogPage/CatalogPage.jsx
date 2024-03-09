import React, { useState, useEffect, useRef } from 'react';
import { fetchContacts } from 'redux/contacts/contacts.reducer';
import { useSelector, useDispatch } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { useLocation } from 'react-router-dom';
import { Navigate, NavLink } from 'react-router-dom';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import axios from 'axios';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contactsStore.isLoading);
  const error = useSelector(state => state.contactsStore.error);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 12;
  const [loading, setLoading] = useState(true);
  const contactsContainerRef = useRef(null);
  const [filterTerm, setFilterTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalItemsResponse = await axios.get(
          'https://65e85b1c4bb72f0a9c4f090a.mockapi.io/cars'
        );

        const filtered = totalItemsResponse.data.filter(contact =>
          contact.make.toLowerCase().includes(filterTerm.toLowerCase())
        );

        setFilteredContacts(filtered);

        const totalPages = Math.ceil(filtered.length / limit);

        if (currentPage > totalPages) {
          setCurrentPage(totalPages);
        }

        dispatch(fetchContacts({ page: currentPage, limit }));

        setHasMore(currentPage < totalPages);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, currentPage, limit, filterTerm]);

  const handleLoadMore = () => {
    if (hasMore) {
      setCurrentPage(prevPage => prevPage + 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleFilterChange = value => {
    setFilterTerm(value);
    setCurrentPage(1);
  };

  const handlePriceChange = value => {
    // Фільтруємо контакти на основі вибраної ціни
    const filteredByPrice = filteredContacts.filter(
      contact => contact.rentalPrice <= value
    );
    // Оновлюємо стан відфільтрованих контактів
    setFilteredContacts(filteredByPrice);
  };

  if (loading) {
    return (
      <div className={css.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={css.contactsContainer} ref={contactsContainerRef}>
      {error !== null && <Navigate to="/catalog/404" replace={true} />}
      <NavLink
        state={{ from: location }}
        className={css.goBack}
        to={backLinkRef.current}
      >
        Go back
      </NavLink>

      <Filter
        contacts={contacts}
        allContacts={allContacts}
        filteredContacts={filteredContacts}
        setFilteredContacts={setFilteredContacts}
        onFilterChange={handleFilterChange}
        onPriceChange={handlePriceChange}
      />

      {isLoading && <Loader />}
      <ContactList
        contacts={filteredContacts.slice(
          (currentPage - 1) * limit,
          currentPage * limit
        )}
        makeFilterTerm={filterTerm}
        priceFilterTerm={selectedPrice}
      />

      {hasMore && filteredContacts.length > currentPage * limit && (
        <button className={css.button} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
