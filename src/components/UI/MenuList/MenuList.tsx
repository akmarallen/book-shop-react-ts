import React from "react";
import styles from "./MenuList.module.scss";

interface MENU_ITEMS {
  id: number;
  name: string;
  link: string;
}

interface MenuListProps {
  items: MENU_ITEMS[];
}

const MenuList: React.FC<MenuListProps> = ({ items }) => {
  return (
    <div className={styles.menu}>
      <ul className={styles.menu__ul}>
        {items.map((item) => (
          <li className={styles.menu__ul__list} key={item.id}>
            <a href={item.link} className={styles.menu__ul__list__a}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
