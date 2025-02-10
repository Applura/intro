import React from "react";
import "./short-cards.pcss";
import Link from "./../link/link.jsx";

/**
 * Nav renders a navigation resource.
 *
 * @param resource
 */
const ShortCards = ({ cards }) => {
  // Get the current URL
  const currentUrl = window.location.href;

  return (
    <div className="short-cards">
      {cards.data.map(({ title, teaserIcon, teaserText, links }, i) => {
        const linkHref = new URL(links.get('canonical').href, window.location.origin).href;
        // Check if the resolved link matches the current URL
        const isActive = linkHref === currentUrl;
        return (
          <div key={i} className={`short-card ${isActive ? 'active' : ''}`}>
            <a title={title} href={links.get('canonical').href}>
              <div className={'short-card-icon ' + teaserIcon}></div>
              <div className="short-card-title">{title}</div>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ShortCards;
