import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// User Pages
import Home from "./pages/Home";
import Shops from "./pages/Shops";
import Offers from "./pages/Offers";
import Compare from "./pages/Compare";
import ShopDetails from "./pages/ShopDetails";

// Admin Pages
import AdminLogin from "./pages/Admin/Login";
import Dashboard from "./pages/Admin/Dashboard";
import CreateShop from "./pages/Admin/CreateShop";
import ManageShops from "./pages/Admin/ManageShops";
import ManageOffers from "./pages/Admin/ManageOffers";
import ManageCategories from "./pages/Admin/ManageCategories";
import CategoryWiseShops from "./pages/Admin/CategoryWiseShops";
import ShopList from "./pages/Admin/ShopList";
import OfferProducts from "./pages/Admin/OfferProducts";
import CompareAdmin from "./pages/Admin/CompareAdmin";
import Filters from "./pages/Admin/Filters";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* User Panel Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/shop/:id" element={<ShopDetails />} />

          {/* Admin Panel Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/create-shop" element={<CreateShop />} />
          <Route path="/admin/manage-shops" element={<ManageShops />} />
          <Route path="/admin/manage-offers" element={<ManageOffers />} />
          <Route path="/admin/manage-categories" element={<ManageCategories />} />
          <Route path="/admin/category-wise" element={<CategoryWiseShops />} />
          <Route path="/admin/shop-list" element={<ShopList />} />
          <Route path="/admin/offer-products" element={<OfferProducts />} />
          <Route path="/admin/compare" element={<CompareAdmin />} />
          <Route path="/admin/filters" element={<Filters />} />

          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
