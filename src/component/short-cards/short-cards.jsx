import React from "react";
import "./short-cards.pcss";

/**
 * Nav renders a navigation resource.
 */
const ShortCards = ({ cards }) => {
  return (
    <div className="short-cards">
      {cards.map(({ id, title, teaserIcon, teaserText, links }, i) => {
        return (
          <a
            key={id}
            className={`short-card-link`}
            title={title}
            href={links.canonical.href}
          >
            <div className="short-card">
              <div className={`short-card-icon ${teaserIcon}`}></div>
              <div className="short-card-title">{title}</div>
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default ShortCards;
