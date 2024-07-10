import React, { useState } from "react";
import styles from "./BookCard.module.scss";
import { Book } from "../../../redux/booksSlices/bookSlices";
import Button from "components/UI/Button/Button";
import iconDelete from "assets/icons/delete.svg";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeItem } from "../../../redux/counterSlices/counterSlices";


const BookCard: React.FC<Book> = ({ id, volumeInfo, saleInfo }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  // const cartItems = useSelector((state: RootState) => state.cart.cart);
  
  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      dispatch(decrementQuantity(id));
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const handleRemove = () => {
    dispatch(removeItem(id));
    setQuantity(0);
  };

  return (
    <div className={styles.books} key={id}>
      <div className={styles.books__item}>
        <img src={volumeInfo.imageLinks?.thumbnail} alt="Book Photo" />
      </div>
      <div className={styles.books__about}>
        <h2>{volumeInfo.title}</h2>
        <h3>{volumeInfo.authors?.join(", ")}</h3>
        <p>{saleInfo.country}</p>
        <h3>{saleInfo.isEbook}</h3>
      </div>
      <div className={styles.books__buttons}>
        <Button variant="cart" onClick={handleIncrement}>
          +
        </Button>
        <p>Count</p>
        <Button variant="cart" onClick={handleDecrement}>
          -
        </Button>
        <img src={iconDelete} alt="delete" onClick={handleRemove} />
      </div>
    </div>
  );
};

export default BookCard;
