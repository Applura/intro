import React from "react";
import "./cards.pcss";

const Cards = ({ cards }) => (
  <div className="cards">
    {cards.map(({ id, title, teaserIcon, teaserText, links }) => (
      <a key={id} href={links.canonical.href}>
        <div className="card">
          <div className={`card-icon ${teaserIcon}`}></div>
          <div className="card-content">
            <div className="card-title">{title}</div>
            <div className="card-description">{teaserText}</div>
          </div>
        </div>
      </a>
    ))}
  </div>
);

export default Cards;
