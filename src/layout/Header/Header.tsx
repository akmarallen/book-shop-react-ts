import styles from "./Header.module.scss";
import logo from "/logo.svg";
import card from "assets/icons/cart.png";
import Button from "components/UI/Button/Button";
import MenuList from "components/UI/MenuList/MenuList";
import { MENU_ITEMS } from "utils/constants";
import { useState } from "react";
import SelectedBook from "components/UI/SelectedBook/SelectedBook";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleCart = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.header}>
      <img className="styles.header__img" src={logo} alt="TheBook.Pk" />
      <MenuList items={MENU_ITEMS} />
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
      <img
        className={styles.cart__img}
        onClick={toggleCart}
        src={card}
        alt="card-icon"
      />{" "}
      <div className={`${styles.overlay} ${isActive ? styles.active : ""}`} />
      <SelectedBook isActive={isActive} />
    </div>
  );
};

export default Header;
