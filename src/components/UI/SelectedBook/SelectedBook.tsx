import styles from "./SelectedBook.module.scss";
import { useSelector } from "react-redux";
import { selectedBooks } from "../../../redux/counterSlices/counterSlices";
import { useEffect } from "react";

interface SelectedBookProps {
  isActive: boolean;
  onClose: () => void;
}

const SelectedBook: React.FC<SelectedBookProps> = ({ isActive, onClose }) => {
  const books = useSelector(selectedBooks);

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

  return (
    <div
      className={`${styles.cart} ${isActive ? styles.active : ""}`}
      aria-hidden={isActive ? "false" : "true"}
    > 
      <ul className={styles.cart__list}>Your cart:
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book.id} className={styles.cart__list__item}>
              <img src={book.image} alt={book.author} />
              <span>{book.quantity}</span>
              <div className={styles.cart__list__item__details}>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
              </div>
                <div className={styles.cart__list__item__btnDel}>delete</div>
            </li>
          ))
        ) : (
          <li className={styles.cart__list__item}>Your cart is empty</li>
        )}
      </ul>
    </div>
  );
};
export default SelectedBook;
