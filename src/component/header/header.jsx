import React from "react";
import Nav from "./../nav/nav.jsx";
import "./header.pcss";
import Link from "../link/link.jsx";

const Header = ({ menu, links }) => {
  console.log(links);
  const edit = links.get('edit-form');
  return <header className="header">
    <div className="header-content">
      <Nav menu={ menu.data } />
      <div className="actions">
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        {edit && <Link href={edit.href} title={"Edit page"} className={"btn-primary"}/>}
=======
        {edit && <a href={edit.href} title={"Edit page"} className={"btn-primary"}>Edit page</a>}
>>>>>>> Stashed changes
=======
        {edit && <a href={edit.href} title={"Edit page"} className={"btn-primary"}>Edit page</a>}
>>>>>>> Stashed changes
      </div>
    </div>
  </header>
};

export default Header;