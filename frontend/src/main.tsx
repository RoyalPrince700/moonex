import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the main App component

// Create the root React DOM element and render the App component
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
