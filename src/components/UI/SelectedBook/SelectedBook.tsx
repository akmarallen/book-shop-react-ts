import styles from "./SelectedBook.module.scss";
import { useSelector } from "react-redux";
import { selectedBooks } from "../../../redux/counterSlices/counterSlices";

interface SelectedBookProps {
  isActive: boolean;
}
const SelectedBook: React.FC<SelectedBookProps> = ({ isActive }) => {
  const books = useSelector(selectedBooks);

  return (
    <div
      className={`${styles.cart} ${isActive ? styles.active : ""}`}
      aria-hidden={isActive ? "false" : "true"}
    >
      <ul className={styles.cart__list}>
        {books.length > 0 ? (
          books.map((book) => (
            <li key={book.id} className={styles.cart__list__item}>
              <img src={book.image} alt={book.author} />
              <div className={styles.cart__list__item__details}>
                <h3>{book.title}</h3>
                <p>by {book.author}</p>
                <p>Quantity: {book.quantity}</p>
              </div>
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
