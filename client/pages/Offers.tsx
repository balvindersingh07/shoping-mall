import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flame, Tag, TrendingDown, Clock } from "lucide-react";
import { UserHeader } from "@/components/Layout/UserHeader";
import { AstraButton } from "@/components/ui/AstraButton";
import { AstraGradientCard } from "@/components/ui/AstraGradientCard";

export default function Offers() {
  const [filter, setFilter] = useState("all");

  const offers = [
    {
      id: 1,
      shop: "TechHub",
      product: "Wireless Earbuds",
      originalPrice: 999,
      offerPrice: 599,
      discount: 40,
      description: "Premium sound quality with 24-hour battery",
      endDate: "2024-02-15",
      image: "📱",
    },
    {
      id: 2,
      shop: "Fashion Corner",
      product: "Summer Collection",
      originalPrice: 2000,
      offerPrice: 1000,
      discount: 50,
      description: "Latest trendy outfits for the season",
      endDate: "2024-02-10",
      image: "👔",
    },
    {
      id: 3,
      shop: "Foody's Delight",
      product: "Combo Meal",
      originalPrice: 500,
      offerPrice: 350,
      discount: 30,
      description: "Delicious meal combo with free beverage",
      endDate: "2024-02-20",
      image: "🍔",
    },
    {
      id: 4,
      shop: "Home Paradise",
      product: "Bed Sheets Set",
      originalPrice: 1500,
      offerPrice: 899,
      discount: 40,
      description: "Premium quality cotton bed sheets",
      endDate: "2024-02-18",
      image: "🏠",
    },
    {
      id: 5,
      shop: "Sport Zone",
      product: "Running Shoes",
      originalPrice: 3000,
      offerPrice: 1800,
      discount: 40,
      description: "Professional grade running footwear",
      endDate: "2024-02-12",
      image: "⚽",
    },
    {
      id: 6,
      shop: "Beauty Bliss",
      product: "Skincare Kit",
      originalPrice: 1200,
      offerPrice: 799,
      discount: 33,
      description: "Complete skincare routine set",
      endDate: "2024-02-25",
      image: "💄",
    },
  ];

  const filteredOffers = offers.filter((offer) => {
    if (filter === "hot") return offer.discount >= 40;
    if (filter === "ending") {
      const today = new Date();
      const endDate = new Date(offer.endDate);
      const daysLeft = Math.floor(
        (endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
      );
      return daysLeft <= 5;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <UserHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-poppins mb-4 text-gray-900 flex items-center gap-3">
            <Flame className="text-orange-500" size={40} />
            Amazing Offers
          </h1>
          <p className="text-gray-600 text-lg">
            Grab the hottest deals from your favorite shops
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-12">
          {[
            { value: "all", label: "All Offers" },
            { value: "hot", label: "Hot Deals (40%+)" },
            { value: "ending", label: "Ending Soon" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === tab.value
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <AstraGradientCard key={offer.id} gradient="secondary">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-4xl mb-2">{offer.image}</div>
                    <h3 className="font-bold text-lg">{offer.product}</h3>
                    <p className="text-sm opacity-90">{offer.shop}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                    <div className="text-2xl font-black">{offer.discount}%</div>
                    <div className="text-xs">OFF</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm opacity-90">{offer.description}</p>

                {/* Pricing */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="line-through opacity-75 text-sm">
                      ${offer.originalPrice}
                    </span>
                    <span className="text-2xl font-black">
                      ${offer.offerPrice}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <Clock size={16} />
                    <span>Ends {offer.endDate}</span>
                  </div>
                </div>

                {/* CTA */}
                <AstraButton
                  size="md"
                  variant="outline"
                  className="w-full text-white border-white hover:bg-white/20"
                >
                  View Offer
                </AstraButton>
              </div>
            </AstraGradientCard>
          ))}
        </div>
      </section>
    </div>
  );
}
