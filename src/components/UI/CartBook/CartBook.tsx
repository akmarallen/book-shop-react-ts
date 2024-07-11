import cart from "assets/icons/cart.png";
import styles from "./CartBook.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const CartBook = () => {
  const [isActive, setIsActive] = useState(false);

  const books = useSelector((state: RootState) => state.cart.cart);

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
                <div className={styles.cart__list__item_active}>
                  <span>Quantity: {book.quantity}</span>
                </div>
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
export default CartBook;
