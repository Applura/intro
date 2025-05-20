import React from "react";
import ProcessedHTML from "../../component/processed-html/processed-html.jsx";

/**
 * Nav renders a navigation resource.
 *
 * @param resource
 */
const Text = ({ components }) => {
  const {heading, content} = components.data;
  return <div className="text-wrapper">
    <h2 className="content-title">{heading}</h2>
    <div className="content-description">
      <ProcessedHTML html={content}/>
    </div>
  </div>
};

export default Text;
