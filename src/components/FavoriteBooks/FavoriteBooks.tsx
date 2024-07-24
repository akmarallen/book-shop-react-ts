import React, { useEffect, useRef } from "react";
import styles from "./FavoriteBooks.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavorite,
  selectFavoriteBooks,
  Favorite,
} from "../../redux/favoritesSlices/favoritesSlices";

export interface FavoriteBooksProps {
  isFavoriteActive: boolean;
  onRemove: () => void;
}

const FavoriteBooks: React.FC<FavoriteBooksProps> = ({
  isFavoriteActive,
  onRemove,
}) => {
  const dispatch = useDispatch();
  const favoriteBooks = useSelector(selectFavoriteBooks);
  const favRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (favRef.current && !favRef.current.contains(event.target as Node)) {
        onRemove();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onRemove]);

  const handleToggleFavorite = (book: Favorite) => {
    dispatch(toggleFavorite(book));
    console.log(toggleFavorite, "favorite");
  };

  return (
    <div
      ref={favRef}
      className={`${styles.favorites}${isFavoriteActive ? styles.active : ""}`}
      aria-hidden={isFavoriteActive ? "false" : "true"}
    >
      {isFavoriteActive ? (
        <ul className={styles.favorites__list}>
          {favoriteBooks.map((book) => (
            <li key={book.id} className={styles.favorites__list__item}>
              <img src={book.image} alt={book.title} />
              <div className={styles.favorites__list__item__details}>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <button onClick={() => handleToggleFavorite(book)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your favorite cart is empty</p>
      )}
    </div>
  );
};

export default FavoriteBooks;
