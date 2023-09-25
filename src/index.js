import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import Socket from "./component/socket.jsx";

document.addEventListener("DOMContentLoaded", async () => {
  const { bootstrap } = await import(
    "https://cdn.applura.com/dist/js/client/v2.js"
  );
  const container = document.getElementById("app");
  createRoot(container).render(<Socket App={App} client={bootstrap()} />);
});
