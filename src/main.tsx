import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";
import App from "./App.tsx";
import IndexDetector from "./pages/detector/index.tsx";
import IndexDashboard from "./pages/dashboard/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/dashboard" element={<IndexDashboard />} />
          <Route path="/detector" element={<IndexDetector />} />
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>
);
