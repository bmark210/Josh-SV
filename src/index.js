import React from "react";
import { createRoot } from "react-dom/client";
import "./App.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Если вы хотите измерить производительность приложения, то передайте функцию
// для регистрации результатов (например: reportWebVitals(console.log))
// или отправьте её в конечную точку аналитики.
reportWebVitals();
