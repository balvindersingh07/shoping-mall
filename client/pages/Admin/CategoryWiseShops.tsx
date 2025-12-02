import React, { useState } from "react";
import { AdminHeader } from "@/components/Layout/AdminHeader";
import { AstraGradientCard } from "@/components/ui/AstraGradientCard";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";
import { ChevronRight, ShoppingBag } from "lucide-react";

export default function CategoryWiseShops() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: Record<string, { emoji: string; shops: string[] }> = {
    Electronics: {
      emoji: "📱",
      shops: ["TechHub", "Digital World", "Gadget Station"],
    },
    Fashion: {
      emoji: "👔",
      shops: ["Fashion Corner", "Style Hub", "Trendy Wear"],
    },
    "Food & Beverage": {
      emoji: "🍔",
      shops: ["Foody's Delight", "Quick Bites", "Taste of India"],
    },
    "Home & Garden": {
      emoji: "🏠",
      shops: ["Home Paradise", "Garden World", "Decor Plus"],
    },
    Sports: {
      emoji: "⚽",
      shops: ["Sport Zone", "Fitness Hub", "Sports Gear"],
    },
    Beauty: {
      emoji: "💄",
      shops: ["Beauty Bliss", "Glow Up", "Skincare Paradise"],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <AdminHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-2">
            Category-Wise Shops
          </h1>
          <p className="text-gray-600">
            Browse shops organized by category
          </p>
        </div>

        {!selectedCategory ? (
          <>
            {/* Category Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {Object.entries(categories).map(([catName, catData]) => (
                <div
                  key={catName}
                  onClick={() => setSelectedCategory(catName)}
                  className="cursor-pointer"
                >
                  <AstraGradientCard gradient="secondary">
                    <div className="space-y-4">
                      <div className="text-5xl">{catData.emoji}</div>
                      <h3 className="text-xl font-bold">{catName}</h3>
                      <p className="text-sm opacity-90">
                        {catData.shops.length} shops
                      </p>
                      <div className="flex items-center gap-2 text-sm opacity-75 font-semibold">
                        View Shops <ChevronRight size={16} />
                      </div>
                    </div>
                  </AstraGradientCard>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Back Button & Category Header */}
            <div className="mb-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 mb-4"
              >
                ← Back to Categories
              </button>
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <span className="text-4xl">
                  {categories[selectedCategory]?.emoji}
                </span>
                {selectedCategory} ({categories[selectedCategory]?.shops.length})
              </h2>
            </div>

            {/* Shops List */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories[selectedCategory]?.shops.map((shop) => (
                <AstraGlassPanel key={shop}>
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <ShoppingBag size={32} className="text-blue-600 mb-3" />
                        <h3 className="text-xl font-bold text-gray-900">
                          {shop}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {selectedCategory}
                    </p>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                      View Details
                    </button>
                  </div>
                </AstraGlassPanel>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
