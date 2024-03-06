import { Route, Routes } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';

import HomePage from 'pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import Layout from 'components/Layout/Layout';
import Page404 from 'pages/Page404/Page404';

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import * as ROUTES from '../constants/routes';

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTES.FAVORITES_ROUTE,
    element: <FavoritesPage />,
  },
  {
    path: ROUTES.CATALOG_ROUTE,
    element: <CatalogPage />,
  },

  {
    path: ROUTES.ERROR_ROUTE,
    element: <Page404 />,
  },
  {
    path: ROUTES.NOTFOUNDPPAGE_ROUTE,
    element: <NotFoundPage />,
  },
];
export const App = () => {
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
