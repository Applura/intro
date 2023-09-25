import React from "react";
import Link from "./link.jsx";

const MenuLink = ({ title, href, active = false }) => {
  return active ? <span>{title}</span> : <Link {...{ title, href }} />;
};

const Item = ({ children, ...link }) => (
  <li>
    <MenuLink {...link} />
    {children && <Items items={children} />}
  </li>
);

const Items = ({ items }) => (
  <ul>
    {items.map((item, i) => (
      <Item key={i} {...item} />
    ))}
  </ul>
);

const Nav = ({ menu }) => (
  <nav>
    <Items items={menu.items} />
    <h1>
      Starter App<sup>React</sup>
    </h1>
  </nav>
);

export default Nav;
