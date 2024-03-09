// import { useDispatch, useSelector } from 'react-redux';
// import { selectFavorites } from '../../redux/favorites/favorites.selector';
// import {
//   addFavorite,
//   removeFavorite,
// } from '../../redux/favorites/favorites.reducer';
// import noFavor from '../../images/noFavor.png';
// import favor from '../../images/favor.png';

// import css from './FilteElement.module.css';

// export default function HeartIcon({ data }) {
//   const dispatch = useDispatch();

//   const favoriteCars = useSelector(selectFavorites);

//   const isChecked = favoriteCars.favorites.some(({ id }) => id === data.id);

//   const handleToggleFavorite = () => {
//     if (isChecked) {
//       dispatch(removeFavorite(data));
//     } else {
//       dispatch(addFavorite(data));
//     }
//   };
//   return (
//     <button onClick={isChecked} type="button" onChange={handleToggleFavorite}>
//       <img
//         // className={isFavorite ? css.favorIcon : css.noFavorIcon}
//         // src={isFavorite ? favor : noFavor}
//         src={isChecked ? favor : noFavor}
//         alt="favorite"
//         width={18}
//         height={16}
//       />
//       {isChecked ? 'Remove from Favorites' : 'Add to Favorites'}
//     </button>
//   );
// }

// {
//   /* <Checkbox checked={isChecked} onChange={handleToggleFavorite} />; */
// }
// <button onClick={handleAddToFavorites} type="button">
//   <img
//     className={isFavorite ? css.favorIcon : css.noFavorIcon}
//     src={isFavorite ? favor : noFavor}
//     alt="favorite"
//     width={18}
//     height={16}
//   />
//   {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
// </button>;
