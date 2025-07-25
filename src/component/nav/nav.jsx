import React from "react";
import "./nav.pcss";

/**
 * Nav renders a navigation resource.
 *
 * @param resource
 */
const Nav = ({ menu }) => {
  return (
    <div className="navigation">
      <ul className="menu">
        {menu.items.map(({ href, title }, i) => (
          <li key={i}><a href={ href }>{ title }</a></li>
        ))}
      </ul>
    </div>
  )
};

export default Nav;
