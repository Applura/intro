import React from "react";
import ProcessedHTML from "../../component/processed-html/processed-html.jsx";
import Header from "../../component/header/header.jsx";
import dayjs from 'dayjs';
import ShortCards from "../../component/short-cards/short-cards.jsx";
import "./basic-page.pcss";

/**
 * BasicPage renders "basic_page" resources.
 *
 * @param fields
 *   The basic page fields.
 */
const BasicPage = ({ fields }) => {
  // Extract the required fields from the resource fields.
  const { mainMenu, title, created, relatedLinks, body, links } = fields;
  const cards = relatedLinks ? Object.values(relatedLinks) : [];

  return (
    <div id="basic-page">
      <Header menu={mainMenu} links={links}></Header>
      <main>
        <section className="basic-page-content">
          {cards && cards.length > 0 ? (
            <div className="sidebar">
              <div className="sidebar-title">Dive Deeper</div>
              <ShortCards cards={cards}></ShortCards>
            </div>
          ) : null}
          <div className="content">
            <div className="page-data">
              <h1 className="page-title">{title}</h1>
              <div className="authoring-information">
                <div className="author">Name Name</div>
                <div className="date">{dayjs(created).format('MMM D, YYYY')}</div>
              </div>
            </div>
            {/* The body content is sent from the server, pre-processed and filtered against XSS vulnerabilities. */}
            <ProcessedHTML html={body} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default BasicPage;
