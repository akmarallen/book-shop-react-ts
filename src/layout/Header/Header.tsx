import styles from "./Header.module.scss";
import { useState } from "react";
import logo from "/logo.svg";
import cart from "@assets/icons/cart.png";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { MENU_ITEMS } from "@utils/constants";
import MenuList from "@components/UI/MenuList/MenuList";
import Button from "@components/UI/Button/Button";
import FavoriteBooks from "@components/FavoriteBooks/FavoriteBooks";
import SelectedBook from "@components/SelectedBook/SelectedBook";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFavoriteActive, setIsFavoriteActive] = useState(false);

  const toggleCart = () => {
    setIsActive((isActive) => !isActive);
  };

  const handleCloseCart = () => {
    setIsActive(() => false);
  };
  const toggleFavorites = () => {
    setIsFavoriteActive((prev) => !prev);
  };

  const handleRemoveFavorite = () => {
    setIsFavoriteActive(() => false);
  };
  return (
    <div className={styles.header}>
      <img className="styles.header__img" src={logo} alt="TheBook.Pk" />
      <MenuList items={MENU_ITEMS} />
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
      <div
        className={`${styles.header__favorites} ${
          isFavoriteActive ? styles.active : ""
        }`}
      >
        <FavoriteSharpIcon
          onClick={toggleFavorites}
          style={{ color: "rgb(48,203,112)", fontSize: "1.8rem" }}
        />
        <FavoriteBooks
          onRemove={handleRemoveFavorite}
          isFavoriteActive={isFavoriteActive}
        />
      </div>
      <>
        <img
          className={styles.cart__img}
          onClick={toggleCart}
          src={cart}
          alt="card-icon"
        />{" "}
        <div
          onClick={toggleCart}
          className={`${styles.header__overlay} ${
            isActive ? styles.active : ""
          }`}
        />
        <SelectedBook isActive={isActive} onClose={handleCloseCart} />
      </>
    </div>
  );
};

export default Header;
