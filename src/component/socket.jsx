import React, { useEffect, useState } from "react";
import ClientContext from "../context/client.jsx";

const updateDocumentTitle = (e) => {
  const title = e?.resource?.title;
  if (title && document) {
    document.title = title;
  }
};

const startEventLoop = (client, eventHandler) => {
  (async () => {
    for await (const event of client.start()) {
      eventHandler(event);
    }
  })();
  return () => client.stop();
};

const Socket = ({ App, client }) => {
  const [{ resource, problem }, setData] = useState({});

  const handleEvent = (e) => {
    updateDocumentTitle(e);
    setData(e);
  };

  useEffect(() => startEventLoop(client, handleEvent), [client]);

  return resource || problem ? (
    <ClientContext.Provider value={client}>
      <App resource={resource} problem={problem} />
    </ClientContext.Provider>
  ) : null;
};

export default Socket;
