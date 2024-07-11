import logo from "/logo.svg";
import Button from "components/UI/Button/Button";
import MenuList from "components/UI/MenuList/MenuList";
import { MENU_ITEMS } from "utils/constants";
import styles from "./Header.module.scss";
import CartBook from "components/UI/CartBook/CartBook";

const Header = () => {
  return (
    <div className={styles.header}>
      <img className="styles.header__img" src={logo} alt="TheBook.Pk" />
      <MenuList items={MENU_ITEMS} />
      <Button>Sign In</Button>
      <Button>Sign Up</Button>
      <CartBook/>
    </div>
  );
};

export default Header;
