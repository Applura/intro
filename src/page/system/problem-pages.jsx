import React from "react";
import './problem-pages.pcss';

const ProblemPages = ({status, text}) => {
  return (
    <div className={"main-content error-pages page-" + status }>
      <div className="content-wrapper">
        <div className="icon"></div>
        <h2 className={'page-title'}>{status}</h2>
        <p className={'text'}>{text}</p>
      </div>
    </div>
  );
};

export default ProblemPages;
