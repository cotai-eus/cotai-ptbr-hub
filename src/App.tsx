
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { AppLayout } from "@/components/layout/AppLayout";
import Index from "./pages/Index";
import DashboardPage from "./pages/DashboardPage";
import EditaisPage from "./pages/EditaisPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Rotas da aplicação com layout compartilhado */}
            <Route 
              path="/app/*" 
              element={
                <AppLayout>
                  <Routes>
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/editais" element={<EditaisPage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </AppLayout>
              } 
            />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
