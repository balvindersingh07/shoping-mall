import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { AstraButton } from "@/components/ui/AstraButton";
import { cn } from "@/lib/utils";

export const AdminHeader: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/admin/dashboard", label: "Dashboard" },
    { path: "/admin/create-shop", label: "Create Shop" },
    { path: "/admin/manage-shops", label: "Manage Shops" },
    { path: "/admin/manage-offers", label: "Manage Offers" },
    { path: "/admin/manage-categories", label: "Categories & Floors" },
    { path: "/admin/category-wise", label: "Category Wise Shops" },
    { path: "/admin/shop-list", label: "Shop List" },
    { path: "/admin/offer-products", label: "Offer Products" },
    { path: "/admin/compare", label: "Compare Products" },
    { path: "/admin/filters", label: "Filters" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/admin/dashboard"
            className="text-2xl font-bold font-poppins flex items-center gap-2"
          >
            <LayoutDashboard size={28} />
            Admin Panel
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden"
          >
            {sidebarOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex gap-4">
            <Link to="/">
              <AstraButton size="sm" variant="outline">
                Back to Shop
              </AstraButton>
            </Link>
            <Link to="/admin/login">
              <AstraButton size="sm" variant="outline">
                <LogOut size={18} />
              </AstraButton>
            </Link>
          </div>
        </div>
      </header>

      {sidebarOpen && (
        <aside className="bg-gradient-to-b from-blue-700 to-purple-700 text-white p-4 md:hidden">
          <nav className="space-y-2">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={cn(
                  "block px-4 py-2 rounded-lg transition-colors",
                  location.pathname === path
                    ? "bg-white/20"
                    : "hover:bg-white/10"
                )}
                onClick={() => setSidebarOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </aside>
      )}
    </>
  );
};
