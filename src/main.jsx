import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import { HelmetProvider } from "react-helmet-async";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <HelmetProvider> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </HelmetProvider> */}
  </React.StrictMode>
);
