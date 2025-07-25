import React from "react";
import Nav from "./../nav/nav.jsx";
import "./header.pcss";

const Header = ({ menu, links }) => {
  const edit = links['edit-form'];
  return <header className="header">
    <div className="header-content">
      <Nav menu={ menu } />
      {edit && (
        <div className="actions">
          <a href={edit.href} title="Edit page" className="btn-primary">Edit page</a>
        </div>
      )}
    </div>
  </header>
};

export default Header;
