import React from "react";
import ProcessedHTML from "../../component/processed-html/processed-html.jsx";

/**
 * Nav renders a navigation resource.
 *
 * @param resource
 */
const Text = ({ components }) => {
  const { heading, content } = components;
  return <div className="text-wrapper">
    {heading ?
      <h2 className="content-title">{heading}</h2>
      : null
    }
    {content ?
      <div className="content-description">
        <ProcessedHTML html={content}/>
      </div>
      : null
    }
  </div>
};

export default Text;
