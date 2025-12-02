import React, { useState } from "react";
import { Grid3x3, List, Star, MapPin } from "lucide-react";
import { AdminHeader } from "@/components/Layout/AdminHeader";
import { AstraButton } from "@/components/ui/AstraButton";
import { AstraGradientCard } from "@/components/ui/AstraGradientCard";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";

export default function ShopList() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const shops = [
    {
      id: 1,
      name: "TechHub",
      category: "Electronics",
      floor: "2nd Floor",
      rating: 4.8,
      shops: 15,
      image: "📱",
    },
    {
      id: 2,
      name: "Fashion Corner",
      category: "Fashion",
      floor: "1st Floor",
      rating: 4.6,
      shops: 12,
      image: "👔",
    },
    {
      id: 3,
      name: "Foody's Delight",
      category: "Food & Beverage",
      floor: "G Floor",
      rating: 4.9,
      shops: 8,
      image: "🍔",
    },
    {
      id: 4,
      name: "Home Paradise",
      category: "Home & Garden",
      floor: "3rd Floor",
      rating: 4.7,
      shops: 20,
      image: "🏠",
    },
    {
      id: 5,
      name: "Sport Zone",
      category: "Sports",
      floor: "2nd Floor",
      rating: 4.5,
      shops: 10,
      image: "⚽",
    },
    {
      id: 6,
      name: "Beauty Bliss",
      category: "Beauty",
      floor: "1st Floor",
      rating: 4.8,
      shops: 14,
      image: "💄",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <AdminHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-2">
              Shop List
            </h1>
            <p className="text-gray-600">All shops in the mall</p>
          </div>
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-3 rounded transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <Grid3x3 size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-3 rounded transition-colors ${
                viewMode === "list"
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.map((shop) => (
              <AstraGradientCard key={shop.id} gradient="secondary">
                <div className="space-y-4">
                  <div className="text-5xl text-center">{shop.image}</div>
                  <h3 className="text-xl font-bold">{shop.name}</h3>
                  <p className="text-sm opacity-90">{shop.category}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Star size={16} fill="white" />
                      <span>{shop.rating}/5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{shop.floor}</span>
                    </div>
                  </div>
                  <AstraButton
                    size="md"
                    variant="outline"
                    className="w-full text-white border-white hover:bg-white/20"
                  >
                    View Details
                  </AstraButton>
                </div>
              </AstraGradientCard>
            ))}
          </div>
        ) : (
          <AstraGlassPanel>
            <div className="space-y-3">
              {shops.map((shop) => (
                <div
                  key={shop.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-3xl">{shop.image}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{shop.name}</h3>
                      <p className="text-sm text-gray-600">
                        {shop.category} • {shop.floor}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="font-bold text-gray-900">{shop.rating}</p>
                      <p className="text-xs text-gray-500">Rating</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-gray-900">{shop.shops}</p>
                      <p className="text-xs text-gray-500">Products</p>
                    </div>
                    <AstraButton size="sm">View</AstraButton>
                  </div>
                </div>
              ))}
            </div>
          </AstraGlassPanel>
        )}
      </section>
    </div>
  );
}
