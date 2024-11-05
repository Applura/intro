import React from "react";
import ProcessedHTML from '../component/processed-html.jsx';
import Nav from '../component/nav.jsx';
import Cards from "../component/cards.jsx";
import Text from "../component/text.jsx";

/**
 * LandingPage renders "landing_page" resources.
 *
 * @param fields
 *   The landing page fields.
 */
const LandingPage = ({ fields }) => {
  // Extract the required fields from the resource fields.
  const { title, hero, mainMenu, cards, text } = fields;
  console.log(fields);
  return (
    <div id="landing-page">
      <header className="header">
        <div className="header-content container">
          <Nav menu={ mainMenu.data } />
          <div className="actions">
            <a href="#" className="btn-primary">Edit Page</a>
          </div>
        </div>
      </header>
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
