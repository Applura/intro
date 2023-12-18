import React from "react";
import ProcessedHTML from "../component/processed-html.jsx";
import PageContainer from "../component/page-container.jsx";

/**
 * BasicPage renders "basic_page" resources.
 *
 * @param fields
 *   The basic page fields.
 */
const BasicPage = ({ fields }) => {
  const { mainMenu, title, body } = fields;
  return (
      <PageContainer mainMenu={ mainMenu }>
        <main>
          <h2>{title}</h2>
          <ProcessedHTML html={ body } />
        </main>
      </PageContainer>
  );
};

export default BasicPage;
