import styles from "./SelectedBook.module.scss";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  selectedBooks,
  totalQuantity,
} from "@redux/counterSlices/counterSlices";
import { removeBook } from "@redux/booksSlices/bookSlices";
import Button from "@components/UI/Button/Button";
export interface SelectedBookProps {
  isActive: boolean;
  onClose: () => void;
}

const SelectedBook: React.FC<SelectedBookProps> = ({ isActive, onClose }) => {
  const books = useSelector(selectedBooks);
  const totalQty = useSelector(totalQuantity);
  const dispatch = useDispatch();
  const SelectedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        SelectedRef.current &&
        !SelectedRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleRemoveBook = (bookId: string) => {
    dispatch(removeBook(bookId));
  };

  const handleIncrement = (bookId: string) => {
    dispatch(incrementQuantity(bookId));
  };

  const handleDecrement = (bookId: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(decrementQuantity(bookId));
    }
    if (quantity === 1) {
      dispatch(removeBook(bookId));
    }
  };

  return (
    <div
      ref={SelectedRef}
      className={`${styles.cart} ${isActive ? styles.active : ""}`}
      aria-hidden={isActive ? "false" : "true"}
    >
      <br /> Your cart: <span>{totalQty} items</span>
      {books.length > 0 ? (
        books.map((book) => (
          <>
            <ul className={styles.cart__list}>
              <li key={book.id} className={styles.cart__list__item}>
                <img src={book.image} alt={book.authors} />
                <span>{book.quantity}</span>
                <div className={styles.cart__list__item__details}>
                  <h3>{book.title}</h3>
                  <p>by {book.authors}</p>
                </div>
                <div className={styles.cart__list__item__buttons}>
                  <div
                    onClick={() => handleIncrement(book.id)}
                    className={styles.cart__list__item__button}
                  >
                    +
                  </div>
                  <div
                    onClick={() => handleDecrement(book.id, book.quantity)}
                    className={styles.cart__list__item__button}
                  >
                    -
                  </div>
                  <div onClick={() => handleRemoveBook(book.id)}>delete</div>
                </div>
              </li>
            </ul>
          </>
        ))
      ) : (
        <ul className={styles.cart__list__item}>You haven't chosen anything</ul>
      )}
      {isActive ? (
        <div className={styles.cart__list__btn}>
          <Button variant="cart">Buy</Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default SelectedBook;
