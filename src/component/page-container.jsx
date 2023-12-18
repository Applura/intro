import React from "react";
import Header from "./header.jsx";
import useAssetURL from "../hook/asset-url.js";

const PageContainer = ({ mainMenu, children }) => {
  const assetURL = useAssetURL();
  return <>
    <img className="bijou bijou--large" src={ `${assetURL}/static/flower.svg` } alt="decorative flower"/>
    <img className="bijou bijou--small" src={ `${assetURL}/static/flower.svg` } alt="decorative flower"/>
    <Header menu={ mainMenu } />
    { children }
  </>
};

export default PageContainer;
