import React from "react";

const ProcessedHTML = ({ html }) => (
  <div dangerouslySetInnerHTML={{ __html: html }} />
);

export default ProcessedHTML;
