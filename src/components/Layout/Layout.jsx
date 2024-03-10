import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
