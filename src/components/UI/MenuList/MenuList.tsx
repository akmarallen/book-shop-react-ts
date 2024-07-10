import React from "react";
import "./MenuList.module.scss";

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
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
