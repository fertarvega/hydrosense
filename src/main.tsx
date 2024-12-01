import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { PrimeReactProvider } from "primereact/api";
import App from "./App.tsx";
import IndexDetector from "./pages/detector/index.tsx";
import IndexDashboard from "./pages/dashboard/index.tsx";
import IndexConfiguration from "./pages/configuration/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider value={{ unstyled: false }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<IndexDashboard />} />
          <Route path="/detector" element={<IndexDetector />} />
          <Route path="/configuration" element={<IndexConfiguration />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>
);
