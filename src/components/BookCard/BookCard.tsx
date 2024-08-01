import React, { useEffect, useState } from "react";
import styles from "./BookCard.module.scss";
import { Book } from "@redux/booksSlices/bookSlices";
import Button from "@components/UI/Button/Button";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  selectedBooks,
} from "@redux/counterSlices/counterSlices";
import {
  selectFavoriteBooks,
  toggleFavorite,
} from "@redux/favoritesSlices/favoritesSlices";

interface BookCardProps {
  book: Book;
  isFavorite: boolean;
}

const BookCard: React.FC<BookCardProps> = React.memo(({ book }) => {
  const dispatch = useDispatch();
  const cartBooks = useSelector(selectedBooks);
  const favoriteBooks = useSelector(selectFavoriteBooks);

  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const bookInCart = cartBooks.find((item) => item.id === book.id);
    if (bookInCart) {
      setQuantity(bookInCart.quantity);
    } else {
      setQuantity(0);
    }
    const bookInFavorites = favoriteBooks.some((item) => item.id === book.id);
    setIsFavorite(bookInFavorites);
  }, [cartBooks, favoriteBooks, book.id]);

  const handleAddToCart = () => {
    if (quantity === 0) {
      dispatch(
        addToCart({
          id: book.id,
          quantity: 1,
          authors: book.volumeInfo?.authors[0] || "Unknown",
          title: book.volumeInfo.title || "",
          price: book.saleInfo?.listPrice?.amount || 0,
          image: book.volumeInfo.imageLinks?.thumbnail || "",
        })
      );
      setQuantity(1);
    }
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(book.id));
    setQuantity((quantity) => quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      dispatch(decrementQuantity(book.id));
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleToggleFavorite = () => {
    const favoriteBook = {
      id: book.id,
      author: book.volumeInfo?.authors[0] || "Unknown",
      title: book.volumeInfo.title || "",
      price: book.saleInfo?.listPrice?.amount || 0,
      image: book.volumeInfo.imageLinks?.thumbnail || "",
    };

    dispatch(toggleFavorite(favoriteBook));
  };

  return (
    <div className={styles.books}>
      <div className={styles.books__imgs}>
        {isFavorite ? (
          <FavoriteOutlinedIcon
            style={{ color: "red", fontSize: "1.8rem" }}
            className={styles.books__imgs__imgFavorite}
            onClick={handleToggleFavorite}
          />
        ) : (
          <FavoriteOutlinedIcon
            style={{ color: "white", fontSize: "1.8rem" }}
            onClick={handleToggleFavorite}
            className={styles.books__imgs__imgFavorite}
          />
        )}
        <img
          className={styles.books__imgs__imgCard}
          src={book?.volumeInfo?.imageLinks?.thumbnail}
          alt="Book Photo"
        />
      </div>
      <div className={styles.books__details}>
        <h3>{book.volumeInfo.authors?.[0]}</h3>
        <span>{book.volumeInfo.language}</span> <br />
        <span>Price: {book.saleInfo?.listPrice?.amount ?? 0} USD</span> <br />
      </div>
      {quantity > 0 ? (
        <div className={styles.books__buttons}>
          <Button variant="cart" onClick={handleIncrement}>
            +
          </Button>
          <span>{quantity}</span>
          <Button variant="cart" onClick={handleDecrement}>
            -
          </Button>
        </div>
      ) : (
        <div className={styles.books__addToCard} onClick={handleAddToCart}>
          <span>ADD TO CARD</span>
        </div>
      )}
    </div>
  );
});
export default BookCard;
