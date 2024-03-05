import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshThunk } from 'redux/auth/auth.reducer';
import HomePage from 'pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import Layout from 'components/Layout/Layout';
import Page404 from 'pages/Page404/Page404';
import RestrictedRoute from './RestrictedRoute';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import * as ROUTES from '../constants/routes';
import { selectAuthenticated } from 'redux/auth/auth.selectors';

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: (
      <RestrictedRoute>
        <HomePage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.FAVORITES_ROUTE,
    element: (
      <RestrictedRoute>
        <FavoritesPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CATALOG_ROUTE,
    element: (
      <RestrictedRoute>
        <CatalogPage />
      </RestrictedRoute>
    ),
  },

  {
    path: ROUTES.ERROR_ROUTE,

    element: (
      <RestrictedRoute>
        <Page404 />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.NOTFOUNDPPAGE_ROUTE,

    element: (
      <RestrictedRoute>
        <NotFoundPage />
      </RestrictedRoute>
    ),
  },
];
export const App = () => {
  const authenticated = useSelector(selectAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk(authenticated));
  }, [authenticated, dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        {appRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Layout>
  );
};
