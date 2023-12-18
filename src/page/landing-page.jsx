import React from "react";
import ProcessedHTML from "../component/processed-html.jsx";
import PageContainer from "../component/page-container.jsx";

/**
 * LandingPage renders "landing_page" resources.
 *
 * @param fields
 *   The landing page fields.
 */
const LandingPage = ({ fields }) => {
  const { mainMenu, body } = fields;
  return (
    <PageContainer mainMenu={ mainMenu }>
      <div className="headshot"></div>
      <main>
        <ProcessedHTML html={ body } />
      </main>
    </PageContainer>
  );
};

export default LandingPage;
