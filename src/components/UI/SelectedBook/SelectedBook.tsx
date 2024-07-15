import styles from "./SelectedBook.module.scss";
import cart from "assets/icons/cart.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectedBooks } from "../../../redux/counterSlices/counterSlices";

const SelectedBook = () => {
  const [isActive, setIsActive] = useState(false);

  const books = useSelector(selectedBooks);
  console.log(books, "books");

  const toggleCart = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.cart}>
      <img
        className={styles.cart__img}
        onClick={toggleCart}
        src={cart}
        alt="cart-icon"
      />
      {isActive && (
        <ul className={styles.cart__list}>
          {books.length > 0 ? (
            books.map((book) => (
              <li key={book.id} className={styles.cart__list__item}>
                <ul className={styles.cart__list__item_active}>
                  <li>
                    <div>h3Author: {book.author}</div>
                  </li>
                </ul>
              </li>
            ))
          ) : (
            <li className={styles.cart__list__item}>Your cart is empty</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SelectedBook;
