import React from "react";
import ProcessedHTML from '../../component/processed-html/processed-html.jsx';
import Cards from "../../component/cards/cards.jsx";
import Text from "../../component/text/text.jsx";
import Header from "../../component/header/header.jsx";
import "./landing-page.scss";

/**
 * LandingPage renders "landing_page" resources.
 *
 * @param fields
 *   The landing page fields.
 */
const LandingPage = ({ fields }) => {
  // Extract the required fields from the resource fields.
  const { title, hero, mainMenu, cards, text } = fields;
  return (
    <div id="landing-page">
      <Header menu={mainMenu}></Header>
      <div className="main-content">
        <div className="banner container">
          <h1 className="title">{ title }</h1>
          <div className="description">
            <ProcessedHTML html={hero} />
          </div>
        </div>
        <div className="background-image-section">
          <div className="container">
            <Text components={text} />
            <Cards cards={cards} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
