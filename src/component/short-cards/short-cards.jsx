import React from "react";
import "./short-cards.pcss";

/**
 * Nav renders a navigation resource.
 *
 * @param resource
 */
const ShortCards = ({ cards }) => {
  return (
    <div className="short-cards">
      {cards.map(({ id, title, teaserIcon, teaserText, links }) => (
        <div key={id} className="short-card">
          <div className={`short-card-icon ${teaserIcon}`}></div>
          <div className="short-card-title">{title}</div>
          {teaserText && <div className="short-card-text">{teaserText}</div>}
          {links?.top && (
            <a href={`/path/to/link/${links.top}`} className="short-card-link">
              Read More
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShortCards;
