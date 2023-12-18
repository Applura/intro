import { useContext } from "react";
import ConnectLinkContext from "../context/connect-link.jsx";

const useConnectLink = () => {
  return useContext(ConnectLinkContext);
}

export default useConnectLink;
