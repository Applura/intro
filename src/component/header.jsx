import React from "react";
import Nav from "./nav.jsx";
import useConnectLink from "../hook/connect-link.js";
import Link from "./link.jsx";

const Header = ({ menu }) => {
  const connectLink = useConnectLink();
  return <header>
    { connectLink && <Link className="action btn--primary" {...connectLink} ></Link> }
    <Nav resource={menu.data} />
  </header>
};

export default Header;
