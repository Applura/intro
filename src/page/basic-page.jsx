import React from "react";
import ProcessedHTML from "../component/processed-html.jsx";
import Nav from "../component/nav.jsx";

const BasicPage = ({ fields }) => {
  const { mainMenu, title, body } = fields;
  return (
    <div id="basic-page">
      <header>
        <Nav menu={mainMenu.data} />
        <h2>{title}</h2>
      </header>
      <main>
        <section>
          <ProcessedHTML html={body} />
        </section>
      </main>
    </div>
  );
};

export default BasicPage;
