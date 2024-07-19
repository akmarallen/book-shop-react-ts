import React, { useEffect, useState } from "react";
import styles from "./BookCard.module.scss";
import { Book } from "../../redux/booksSlices/bookSlices";
import Button from "components/UI/Button/Button";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  selectedBooks,
} from "../../redux/counterSlices/counterSlices";

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectedBooks);
  const [quantity, setQuantity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const bookInCart = cartItems.find((item) => item.id === book.id);
    if (bookInCart) {
      setQuantity(bookInCart.quantity);
    } else {
      setQuantity(0);
    }
  }, [cartItems, book.id]);

  const handleIncrement = () => {
    dispatch(incrementQuantity(book.id));

    // if (quantity === 0) {
    //   dispatch(
    //     addToCart({
    //       id: book.id,
    //       quantity: 1,
    //       author: book.volumeInfo.authors?.[0] || "Unknown",
    //       title: book.volumeInfo.title,
    //       price: book.saleInfo.listPrice.amount || 0,
    //       image: book.volumeInfo.imageLinks?.thumbnail || "",
    //     })
    //   );
    // }

    setQuantity((quantity) => quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      dispatch(decrementQuantity(book.id));
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleMouse = () => {
    setIsHovered(!isHovered);
  };

  // const handleAddToCart = () => {
  //   setAddedToCart(!addedToCart);
  // };

  const handleAddToCart = () => {
    if (quantity === 0) {
      dispatch(
        addToCart({
          id: book.id,
          quantity: 1,
          author: book.volumeInfo.authors?.[0] || "Unknown",
          title: book.volumeInfo.title,
          price: book.saleInfo?.listPrice?.amount || 0,
          image: book.volumeInfo.imageLinks?.thumbnail || "",
        })
      );
      // console.log(addToCart/, "fub");

      setQuantity(1);
    }
  };
  return (
    <div className={styles.books} key={book.id}>
      <div className={styles.books__imgs}>
        {isHovered ? (
          <FavoriteOutlinedIcon
            style={{ color: "red", fontSize: "1.8rem" }}
            className={styles.books__imgs__imgFavorite}
            onClick={handleMouse}
          />
        ) : (
          <FavoriteOutlinedIcon
            style={{ color: "white", fontSize: "1.8rem" }}
            onClick={handleMouse}
            className={styles.books__imgs__imgFavorite}
          />
        )}
        <img
          className={styles.books__imgs__imgCard}
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt="Book Photo"
        />
      </div>
      <div className={styles.books__details}>
        <h3>{book.volumeInfo.authors?.[0]}</h3>
        <span>{book.volumeInfo.language}</span> <br />
        <span>Price: {book.saleInfo?.listPrice?.amount} USD</span> <br />
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
          ADD TO CARD
        </div>
      )}
    </div>
  );
};

export default BookCard;