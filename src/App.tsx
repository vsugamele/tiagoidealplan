
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Video from "./pages/Video";
import ThankYou from "./pages/ThankYou";
import Cadastro from "./pages/Cadastro";
import ConfirmacaoPendente from "./pages/ConfirmacaoPendente";
import Evento from "./pages/Evento";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/video" element={<Video />} />
          <Route path="/obrigado" element={<ThankYou />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/confirmacao-pendente" element={<ConfirmacaoPendente />} />
          <Route path="/evento" element={<Evento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
