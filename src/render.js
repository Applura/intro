import React from "react";
import App from "./app.jsx";
import { renderToString } from "react-dom/server";

const render = (resource) => renderToString(<App resource={resource} />);

export { render };
