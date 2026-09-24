
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";

// Ensure dark theme is always active
document.documentElement.classList.add("dark");
document.documentElement.classList.remove("dark-mode");
try {
  localStorage.removeItem("darkMode");
} catch {
  // ignore storage errors
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
