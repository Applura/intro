import { useContext } from "react";
import ClientContext from "../context/client.jsx";

const useFollow = () => {
  const client = useContext(ClientContext);
  if (client) {
    return client.follow;
  }
};

export default useFollow;
