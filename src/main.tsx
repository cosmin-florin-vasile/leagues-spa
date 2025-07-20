import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SportsLeaguesApp from "./SportsLeaguesApp.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SportsLeaguesApp />
  </StrictMode>,
);
