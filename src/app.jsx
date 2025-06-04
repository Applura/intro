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
    let text = 'Something went terribly, terribly wrong.';
    const statusCode = problem.response.status;
    switch (statusCode) {
      case 403:
        text = 'Sign in or get out!';
        break;
      case 404:
        text = "Oops, this is not the page you're looking for.";
        break;
    }
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
