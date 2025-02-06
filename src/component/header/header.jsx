import React from "react";
import Nav from "./../nav/nav.jsx";
import "./header.pcss";

const Header = ({ menu }) => {
  return <header className="header">
    <div className="header-content">
      <Nav menu={ menu.data } />
      <div className="actions">
        <a href="#" className="btn-primary">Edit Page</a>
      </div>
    </div>
  </header>
};

export default Header;