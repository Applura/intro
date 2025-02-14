import React from "react";
import './cards.pcss';
import Link from "../link/link.jsx";

/**
 * Nav renders a navigation resource.
 *
 * @param resource
 */
const Cards = ({ cards }) => {
  return  <div className="cards">
    {cards.data.map(({ title, teaserIcon, teaserText, links }, i) => (
      <Link key={i} title={title} href={links.get('canonical').href}>
        <div key={i} className="card">
          <div className={'card-icon ' + teaserIcon}></div>
          <div className="card-content">
            <div className="card-title">{title}</div>
            <div className="card-description">{teaserText}</div>
          </div>
        </div>
      </Link>
    ))}
  </div>
};

export default Cards;
