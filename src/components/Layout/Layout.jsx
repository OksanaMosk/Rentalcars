// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

// import { NavLink } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import { selectAuthenticated } from 'redux/auth/auth.selectors';
// import { selectUserData } from 'redux/auth/auth.selectors';
// import { logOutThunk } from 'redux/auth/auth.reducer';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  // const userData = useSelector(selectUserData);
  // const location = useLocation();
  // const dispatsh = useDispatch();
  // const authenticated = useSelector(selectAuthenticated);

  // const onLogOut = () => {
  //   dispatsh(logOutThunk());
  // };

  return (
    <div className={css.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;