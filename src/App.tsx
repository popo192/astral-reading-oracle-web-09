
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CardSelectionPage from "./pages/CardSelectionPage";
import ReadingResultPage from "./pages/ReadingResultPage";
import BlogPage from "./pages/BlogPage";
import TermsPage from "./pages/TermsPage";
import StarryBackground from "./components/StarryBackground";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <StarryBackground />
          <Header />
          <main className="flex-1 pt-20 pb-12">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/select-cards/:readingType" element={<CardSelectionPage />} />
              <Route path="/reading-result/:readingType" element={<ReadingResultPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/terms" element={<TermsPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
