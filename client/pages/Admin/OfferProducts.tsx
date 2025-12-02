import React, { useState } from "react";
import { Filter, Tag } from "lucide-react";
import { AdminHeader } from "@/components/Layout/AdminHeader";
import { AstraGradientCard } from "@/components/ui/AstraGradientCard";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";

export default function OfferProducts() {
  const [selectedShop, setSelectedShop] = useState("all");

  const shops = [
    "all",
    "TechHub",
    "Fashion Corner",
    "Foody's Delight",
    "Home Paradise",
  ];

  const offerProducts = [
    {
      id: 1,
      product: "Wireless Earbuds",
      shop: "TechHub",
      originalPrice: 999,
      offerPrice: 599,
      discount: 40,
      badge: "Bestseller",
      image: "🎧",
    },
    {
      id: 2,
      product: "Summer Collection",
      shop: "Fashion Corner",
      originalPrice: 2000,
      offerPrice: 1000,
      discount: 50,
      badge: "Flash Sale",
      image: "👔",
    },
    {
      id: 3,
      product: "Combo Meal",
      shop: "Foody's Delight",
      originalPrice: 500,
      offerPrice: 350,
      discount: 30,
      badge: "Limited Time",
      image: "🍔",
    },
    {
      id: 4,
      product: "Bed Sheets Set",
      shop: "Home Paradise",
      originalPrice: 1500,
      offerPrice: 899,
      discount: 40,
      badge: "New",
      image: "🛏️",
    },
    {
      id: 5,
      product: "Running Shoes",
      shop: "TechHub",
      originalPrice: 3000,
      offerPrice: 1800,
      discount: 40,
      badge: "Trending",
      image: "👟",
    },
    {
      id: 6,
      product: "Skincare Kit",
      shop: "Fashion Corner",
      originalPrice: 1200,
      offerPrice: 799,
      discount: 33,
      badge: "Premium",
      image: "💄",
    },
  ];

  const filteredProducts =
    selectedShop === "all"
      ? offerProducts
      : offerProducts.filter((p) => p.shop === selectedShop);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <AdminHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-2">
            Offer Products
          </h1>
          <p className="text-gray-600">Manage products with active offers</p>
        </div>

        {/* Filter */}
        <AstraGlassPanel className="mb-8">
          <div className="flex items-center gap-4">
            <Filter size={20} className="text-blue-600" />
            <div className="flex flex-wrap gap-2">
              {shops.map((shop) => (
                <button
                  key={shop}
                  onClick={() => setSelectedShop(shop)}
                  className={`px-4 py-2 rounded-full transition-all font-semibold ${
                    selectedShop === shop
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {shop === "all" ? "All Shops" : shop}
                </button>
              ))}
            </div>
          </div>
        </AstraGlassPanel>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <AstraGradientCard key={product.id} gradient="primary">
              <div className="space-y-4">
                {/* Badge and Icon */}
                <div className="flex justify-between items-start">
                  <div className="text-4xl">{product.image}</div>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur">
                    {product.badge}
                  </span>
                </div>

                {/* Product Info */}
                <div>
                  <h3 className="font-bold text-lg">{product.product}</h3>
                  <p className="text-sm opacity-90">{product.shop}</p>
                </div>

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="line-through opacity-75 text-sm">
                      ${product.originalPrice}
                    </span>
                    <span className="text-2xl font-black">
                      ${product.offerPrice}
                    </span>
                  </div>
                  <div className="bg-white/20 backdrop-blur px-3 py-2 rounded-lg">
                    <p className="font-bold text-lg">
                      {product.discount}% OFF
                    </p>
                  </div>
                </div>

                {/* Action */}
                <button className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-semibold transition-colors">
                  Manage Offer
                </button>
              </div>
            </AstraGradientCard>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 text-lg">
            Total offer products: {filteredProducts.length}
          </p>
        </div>
      </section>
    </div>
  );
}
