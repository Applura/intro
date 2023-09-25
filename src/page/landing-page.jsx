import React from "react";
import ProcessedHTML from "../component/processed-html.jsx";
import Nav from "../component/nav.jsx";

const Section = ({ id, heading, content }) => (
  <section key={id}>
    <h3>{heading}</h3>
    <ProcessedHTML html={content} />
  </section>
);

const LandingPage = ({ fields }) => {
  const { mainMenu, hero, sections } = fields;
  return (
    <div id="landing-page">
      <header>
        <Nav menu={mainMenu.data} />
        <ProcessedHTML html={hero} />
      </header>
      <main>{sections.data.map(Section)}</main>
    </div>
  );
};

export default LandingPage;
