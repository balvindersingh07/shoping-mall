import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Home, Gift, BarChart3, LogOut } from "lucide-react";
import { AstraButton } from "@/components/ui/AstraButton";
import { cn } from "@/lib/utils";

export const UserHeader: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home", icon: Home },
    { path: "/shops", label: "Shops", icon: ShoppingBag },
    { path: "/offers", label: "Offers", icon: Gift },
    { path: "/compare", label: "Compare", icon: BarChart3 },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-poppins"
        >
          🛍️ Super Mall
        </Link>

        <nav className="hidden md:flex gap-8">
          {navLinks.map(({ path, label, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex items-center gap-2 font-medium transition-colors",
                location.pathname === path
                  ? "text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              )}
            >
              <Icon size={20} />
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4">
          <AstraButton size="sm" variant="outline">
            <LogOut size={18} />
          </AstraButton>
          <Link to="/admin/login">
            <AstraButton size="sm">Admin</AstraButton>
          </Link>
        </div>
      </div>
    </header>
  );
};
