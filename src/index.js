import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// React-Bootstrap imports
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./theme_1664711861345.css";

/* Bootstrap Icons Import */
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

// local CSS imports
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
