import React from "react";
import LandingPage from "./page/landing-page/landing-page.jsx";
import BasicPage from "./page/basic-page/basic-page.jsx";
import ProblemPages from "./page/system/problem-pages.jsx";

/**
 * PageTypes maps server resource types to the component that should render them.
 */
const PageTypes = {
  landing_page: LandingPage,
  basic_page: BasicPage,
};

/**
 * App receives the current resource and/or problem and renders the application interface.
 *
 * @param resource
 *   The current resource.
 * @param problem
 *   The last problem encountered, if any, such as a client or server error.
 */
const App = ({ resource, problem }) => {
  if (problem) {
    const statusCode = problem.status;
    const phrases = {
      403: 'Sign in or get out!',
      404: "Oops, this is not the page you're looking for.",
    };
    const text = phrases?.[statusCode] || 'Something went terribly, terribly wrong.';
    return (
      <ProblemPages
        status={statusCode}
        text={text}
      />
    );
  }
  // Extract the type of the current resource.
  const { type } = resource;
  // Look up the appropriate component to render this resource.
  const Page = PageTypes[type];
  // Render the resource from its fields.
  return (
    (Page && <Page fields={resource} />) || (
      <p>Unrecognized resource type: {type}</p>
    )
  );
};

export default App;
