import React from "react";
import useFollow from "../hook/follow.js";

const Link = ({ title, href }) => {
  const follow = useFollow();
  const handleClick = (e) => {
    if (follow) {
      e.preventDefault();
      follow({ title, href });
    }
  };
  return (
    <a title={title} href={href} onClick={handleClick}>
      {title}
    </a>
  );
};

export default Link;
