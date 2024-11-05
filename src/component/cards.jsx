import React from "react";
import Link from "./link.jsx";

/**
 * Nav renders a navigation resource.
 *
 * @param resource
 */
const Cards = ({ cards }) => {
  console.log(cards);
  return  <div className="cards">
    {cards.data.map(({ title, teaserIcon, teaserText, links }, i) => (
      <a key={i} href={links.get('canonical').href}>
        <div key={i} className="card">
          <div className={'card-icon ' + teaserIcon}></div>
          <div className="card-content">
            <div className="card-title">{title}</div>
            <div className="card-description">{teaserText}</div>
          </div>
        </div>
      </a>
    ))}
  </div>
};

export default Cards;
