import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Phone, ArrowRight, Filter } from "lucide-react";
import { UserHeader } from "@/components/Layout/UserHeader";
import { AstraButton } from "@/components/ui/AstraButton";
import { AstraGradientCard } from "@/components/ui/AstraGradientCard";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";

export default function Shops() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedFloor, setSelectedFloor] = useState("all");

  const shops = [
    {
      id: 1,
      name: "TechHub",
      category: "Electronics",
      floor: "2nd Floor",
      rating: 4.8,
      reviews: 245,
      image: "📱",
      owner: "Raj Kumar",
    },
    {
      id: 2,
      name: "Fashion Corner",
      category: "Fashion",
      floor: "1st Floor",
      rating: 4.6,
      reviews: 189,
      image: "👔",
      owner: "Priya Singh",
    },
    {
      id: 3,
      name: "Foody's Delight",
      category: "Food & Beverage",
      floor: "G Floor",
      rating: 4.9,
      reviews: 312,
      image: "🍔",
      owner: "Amit Patel",
    },
    {
      id: 4,
      name: "Home Paradise",
      category: "Home & Garden",
      floor: "3rd Floor",
      rating: 4.7,
      reviews: 156,
      image: "🏠",
      owner: "Neha Sharma",
    },
    {
      id: 5,
      name: "Sport Zone",
      category: "Sports",
      floor: "2nd Floor",
      rating: 4.5,
      reviews: 128,
      image: "⚽",
      owner: "Vikram Singh",
    },
    {
      id: 6,
      name: "Beauty Bliss",
      category: "Beauty",
      floor: "1st Floor",
      rating: 4.8,
      reviews: 267,
      image: "💄",
      owner: "Ananya Gupta",
    },
    {
      id: 7,
      name: "Book Haven",
      category: "Books",
      floor: "G Floor",
      rating: 4.4,
      reviews: 94,
      image: "📚",
      owner: "Rohan Desai",
    },
    {
      id: 8,
      name: "Toy World",
      category: "Kids",
      floor: "3rd Floor",
      rating: 4.6,
      reviews: 178,
      image: "🎮",
      owner: "Maya Reddy",
    },
  ];

  const categories = [
    "all",
    "Electronics",
    "Fashion",
    "Food & Beverage",
    "Home & Garden",
    "Sports",
    "Beauty",
    "Books",
    "Kids",
  ];
  const floors = ["all", "G Floor", "1st Floor", "2nd Floor", "3rd Floor"];

  const filteredShops = shops.filter(
    (shop) =>
      (selectedCategory === "all" || shop.category === selectedCategory) &&
      (selectedFloor === "all" || shop.floor === selectedFloor)
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <UserHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-poppins mb-4 text-gray-900">
            Explore All Shops
          </h1>
          <p className="text-gray-600 text-lg">
            Discover amazing shops across all categories and floors
          </p>
        </div>

        {/* Filters */}
        <AstraGlassPanel className="mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Filter size={18} />
                Category
              </label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedCategory === cat
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin size={18} />
                Floor
              </label>
              <div className="flex flex-wrap gap-2">
                {floors.map((floor) => (
                  <button
                    key={floor}
                    onClick={() => setSelectedFloor(floor)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedFloor === floor
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {floor}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </AstraGlassPanel>

        {/* Shops Grid */}
        <div>
          <p className="text-gray-600 mb-8">
            Showing {filteredShops.length} shops
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredShops.map((shop) => (
              <div
                key={shop.id}
                className="bg-white rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <AstraGradientCard gradient="secondary" className="!m-0 !rounded-t-2xl !rounded-b-none text-3xl text-center py-8">
                  {shop.image}
                </AstraGradientCard>
                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {shop.name}
                  </h3>
                  <p className="text-sm text-gray-600">{shop.category}</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star size={16} fill="#fbbf24" className="text-yellow-400" />
                      <span>
                        {shop.rating} ({shop.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={16} />
                      <span>{shop.floor}</span>
                    </div>
                  </div>
                  <Link to={`/shop/${shop.id}`}>
                    <AstraButton
                      size="sm"
                      variant="primary"
                      className="w-full"
                    >
                      View Details <ArrowRight size={16} />
                    </AstraButton>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
