import { useContext } from "react";
import AssetURLContext from "../context/asset-url.jsx";

const useAssetURL = () => {
  return useContext(AssetURLContext);
}

export default useAssetURL;
