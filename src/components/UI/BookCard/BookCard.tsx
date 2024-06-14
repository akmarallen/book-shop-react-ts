import React from "react";
import styles from "./BookCard.module.scss";
import { BOOK_ITEM as IItemBook } from "utils/constants/index";

interface IItemBook {
  id: number;
  img: string;
  name: string;
  walles: string;
  price: number;
}

interface BOOK_CARD_PROPS {
  book: IItemBook;
}
const BookCard: React.FC<BOOK_CARD_PROPS> = ({ book }) => {
  return (
    <div className={styles.books}>
      <div className={styles.books__item}>
        <img src={book.img} alt="Book Photo" />
      </div>
      <div className={styles.books__item_about}>
        <h2>{book.name}</h2>
        <p>{book.walles}</p>
        <h3>{book.price} Rs</h3>
      </div>
    </div>
  );
};
export default BookCard;
