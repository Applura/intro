import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import Socket from "./component/socket.jsx";

/**
 * ClientURL is the location where the Applura JavaScript module can be downloaded.
 *
 * It is important to import this module dynamically in order for applications to immediately benefit from security and
 * performance improvements. The module at this URL will never contain API-breaking changes. I.e., breaking changes will
 * use new URL (e.g. "…/v3.js"). However, bug fixes and non-breaking changes are deployed continuously.
 */
const ClientURL = "https://cdn.applura.com/dist/js/client/v2.js";

// Mount and launch the client-side application.
document.addEventListener("DOMContentLoaded", async () => {
  // Always load the latest Applura client.
  const { bootstrap } = await import(ClientURL);
  // Bootstrap the Applura client. This reads <link>s in the page <head> to find the URL of the current resource.
  const client = bootstrap();
  // Get the application container.
  const container = document.getElementById("app");
  // "Plug" the main application into the Applura client.
  const Main = <Socket App={App} client={client} />;
  // Launch the application.
  createRoot(container).render(Main);
});
