import styles from "./SelectedBook.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeBook,
  selectedBooks,
  totalQuantity,
} from "../../redux/counterSlices/counterSlices";
import { useEffect } from "react";

interface SelectedBookProps {
  isActive: boolean;
  onClose: () => void;
}

const SelectedBook: React.FC<SelectedBookProps> = ({ isActive, onClose }) => {
  const books = useSelector(selectedBooks);
  const totalQty = useSelector(totalQuantity);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const cartElement = document.querySelector(`.${styles.cart}`);
      if (cartElement && !cartElement.contains(event.target as Node)) {
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
    } else if (quantity === 0) {
      handleRemoveBook;
    }
  };

  return (
    <div
      className={`${styles.cart} ${isActive ? styles.active : ""}`}
      aria-hidden={isActive ? "false" : "true"}
    >
      Your cart: <span>{totalQty} items</span>
      {books.length > 0 ? (
        books.map((book) => (
          <ul className={styles.cart__list}>
            <li key={book.id} className={styles.cart__list__item}>
              <img src={book.image} alt={book.authors} />
              <span>{book.quantity}</span>
              <div className={styles.cart__list__item__details}>
                <h3>{book.title}</h3>
                <p>by {book.authors}</p>
              </div>
              <div className={styles.cart__list__item__buttons}>
                <div onClick={() => handleIncrement(book.id)}>+</div>
                <div onClick={() => handleDecrement(book.id, book.quantity)}>
                  -
                </div>
                <div onClick={() => handleRemoveBook(book.id)}>delete</div>
              </div>
            </li>
          </ul>
        ))
      ) : (
        <ul className={styles.cart__list__item}>You haven't chosen anything</ul>
      )}
    </div>
  );
};
export default SelectedBook;
