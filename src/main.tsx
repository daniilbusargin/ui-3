import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Index from "./esporfa/pages/Index";
import Offer from "./esporfa/pages/Offer";
import Privacy from "./esporfa/pages/Privacy";
import Consent from "./esporfa/pages/Consent";
import Terms from "./esporfa/pages/Terms";
import NotFound from "./esporfa/pages/NotFound";
import "./esporfa/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/consent" element={<Consent />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-center" richColors closeButton />
    </BrowserRouter>
  </React.StrictMode>,
);
