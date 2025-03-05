import React from "react";
import Nav from "./../nav/nav.jsx";
import "./header.pcss";
import Link from "../link/link.jsx";

const Header = ({ menu, links }) => {
  const edit = links.get('edit-form');
  return <header className="header">
    <div className="header-content">
      <Nav menu={ menu.data } />
      <div className="actions">
        {edit && <Link href={edit.href} title={"Edit page"} className={"btn-primary"}/>}
      </div>
    </div>
  </header>
};

export default Header;