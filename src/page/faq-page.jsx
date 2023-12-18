import React from "react";
import ProcessedHTML from "../component/processed-html.jsx";
import PageContainer from "../component/page-container.jsx";

/**
 * FAQPage renders "faq_page" resources.
 *
 * @param fields
 *   The landing page fields.
 */
const FAQPage = ({ fields }) => {
  const { mainMenu, questions } = fields;
  return (
    <PageContainer mainMenu={ mainMenu }>
      <main>
        { questions.data.map(({ question, answer }) => <div>
          <h3>{ question }</h3>
          <ProcessedHTML html={answer} />
        </div>)}
      </main>
    </PageContainer>
  );
};

export default FAQPage;
