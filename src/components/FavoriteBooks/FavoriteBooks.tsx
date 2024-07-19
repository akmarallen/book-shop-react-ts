import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  Favorite,
  removeFromFavorites,
  selectFavoriteBooks,
} from "redux/favoritesSlices/favoritesSlices";

const FavoriteBooks: React.FC<{ book: Favorite }> = ({ book }) => {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector(selectFavoriteBooks);
  const isFavorite = favoriteBooks.some((item) => item.id === book.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(book.id));
    } else {
      dispatch(addToFavorites(book));
    }
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};
export default FavoriteBooks;
