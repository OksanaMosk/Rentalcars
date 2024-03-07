import React, { useState, useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts.reducer';
import { useSelector, useDispatch } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { useLocation } from 'react-router-dom';
import { Navigate, NavLink } from 'react-router-dom';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { useRef } from 'react';
import axios from 'axios';

import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contactsStore.isLoading);
  const error = useSelector(state => state.contactsStore.error);
  const contacts = useSelector(state => state.contactsStore.contacts);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const limit = 12;
  const [loading, setLoading] = useState(true);
  const contactsContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const totalItemsResponse = await axios.get(
          'https://65e85b1c4bb72f0a9c4f090a.mockapi.io/cars'
        );
        const totalItemsCount = totalItemsResponse.data.length;

        const totalPages = Math.ceil(totalItemsCount / limit);
        dispatch(fetchContacts({ page: currentPage, limit }));

        if (currentPage >= totalPages) {
          setHasMore(false);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, currentPage, limit]);

  const handleLoadMore = () => {
    if (hasMore) {
      setCurrentPage(prevPage => prevPage + 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
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
      <Filter />
      {isLoading && <Loader />}
      <ContactList contacts={contacts} />
      {hasMore && (
        <button className={css.button} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
