// import { useLocation } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Loader from 'components/Loader/Loader';
import photo from '../../images/111.mp4';
import css from './HomePage.module.css';

const HomePage = () => {
  // const isLoadingAuth = useSelector(state => state.auth.isLoadingAuth);
  // const location = useLocation();

  return (
    <div className={css.homeContainer}>
      <video className={css.videoBackground} autoPlay loop muted>
        <source src={photo} type="video/mp4" />
      </video>
      {/* {isLoadingAuth && 
        <Loader />}
     */}
    </div>
  );
};
export default HomePage;
