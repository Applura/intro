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

// Immediately load the latest Applura client. Do not put the dynamic import inside the "DOMContentLoaded" event
// listener to ensure the import begins as quickly as possible.
const clientImport = import(ClientURL);

// Mount and launch the client-side application.
document.addEventListener("DOMContentLoaded", async () => {
  // Wait for the library to complete its import, then bootstrap the Applura client. This should wait for the
  // "DOMContentLoaded" event since the "bootstrap" function depends on <link> elements in the document <head>. They
  // provide the URL for the current resource.
  const { bootstrap } = await clientImport;
  const client = bootstrap();
  // Get the application container.
  const container = document.getElementById("app");
  // "Plug" the main application into the Applura client.
  const Main = <Socket App={App} client={client} />;
  // Launch the application.
  createRoot(container).render(Main);
});
