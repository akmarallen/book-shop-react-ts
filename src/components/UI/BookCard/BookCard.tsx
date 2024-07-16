import React, { useState } from "react";
import styles from "./BookCard.module.scss";
import { Book } from "../../../redux/booksSlices/bookSlices";
import Button from "components/UI/Button/Button";
import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeBook,
} from "../../../redux/counterSlices/counterSlices";

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    dispatch(incrementQuantity(book.id));

    if (quantity === 0) {
      dispatch(
        addToCart({
          id: book.id,
          quantity: 1,
          author: book.volumeInfo.authors?.[0] || "Unknown",
          title: book.volumeInfo.title,
          image: book.volumeInfo.imageLinks?.thumbnail || "",
        })
      );
    }

    setQuantity((quantity) => quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      dispatch(decrementQuantity(book.id));
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleRemove = () => {
    dispatch(removeBook(book.id));
    setQuantity(0);
  };

  return (
    <div className={styles.books} key={book.id}>
      <div className={styles.books__img}>
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Book Photo" />
      </div>
      <div className={styles.books__details}>
        <h3>{book.volumeInfo.authors?.[0]}</h3>
        <p>{book.volumeInfo.language}</p>
        <h4>Price: { book.saleInfo?.listPrice?.amount} USD</h4> <br />
      </div>
      <div className={styles.books__buttons}>
        <Button variant="cart" onClick={handleIncrement}>
          +
        </Button>
        <p>{quantity}</p>
        <Button variant="cart" onClick={handleDecrement}>
          -
        </Button>
      </div>
      <div className={styles.books__delete} onClick={handleRemove}>
        DELETE
      </div>
    </div>
  );
};

export default BookCard;
