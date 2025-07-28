import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RegisterAppointment from "./pages/RegisterAppointment";
import AdminSettings from "./pages/AdminSettings";
import NotFound from "./pages/NotFound";
import AdSenseLoader from "./components/AdSenseLoader";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <AdSenseLoader />
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/register" element={<RegisterAppointment />} />
        <Route path="/admin" element={<AdminSettings />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </TooltipProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
