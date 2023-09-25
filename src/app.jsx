import React from "react";
import LandingPage from "./page/landing-page.jsx";
import BasicPage from "./page/basic-page.jsx";

const pageTypes = {
  landing_page: LandingPage,
  basic_page: BasicPage,
};

const App = ({ resource }) => {
  const { type } = resource;
  const Page = pageTypes[type];
  return <Page fields={resource} />;
};

export default App;
