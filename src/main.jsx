import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Projetos from "./Projetos.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/contato" element={<App />} />
    </Routes>
  </BrowserRouter>
);
