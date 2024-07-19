import styles from "./Header.module.scss";
import logo from "/logo.svg";
import card from "assets/icons/cart.png";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import Button from "components/UI/Button/Button";
import MenuList from "components/UI/MenuList/MenuList";
import { MENU_ITEMS } from "utils/constants";
import { useState } from "react";
import SelectedBook from "components/BookCard/BookCard";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleCart = () => {
    setIsActive((isActive) => !isActive);
  };

  const handleCloseCart = () => {
    setIsActive(false);
  };
  return (
    <div className={styles.header}>
      <img className="styles.header__img" src={logo} alt="TheBook.Pk" />
      <MenuList items={MENU_ITEMS} />
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
      <FavoriteSharpIcon
        style={{ color: "rgb(48,203,112)", fontSize: "1.8rem" }}
      />
      <img
        className={styles.cart__img}
        onClick={toggleCart}
        src={card}
        alt="card-icon"
      />{" "}
      <div
        onClick={toggleCart}
        className={`${styles.overlay} ${isActive ? styles.active : ""}`}
      />
      <SelectedBook isActive={isActive} onClose={handleCloseCart} />
    </div>
  );
};

export default Header;
