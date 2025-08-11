import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { NavigationProvider } from "./context/navigation";

const en = document.getElementById("root");
const root = ReactDOM.createRoot(en);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
