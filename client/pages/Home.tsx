import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Star,
  MapPin,
  TrendingUp,
  Flame,
  ArrowRight,
  Zap,
} from "lucide-react";
import { UserHeader } from "@/components/Layout/UserHeader";
import { AstraButton } from "@/components/ui/AstraButton";
import { AstraGradientCard } from "@/components/ui/AstraGradientCard";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: 1, name: "Electronics", emoji: "📱", color: "from-blue-500" },
    { id: 2, name: "Fashion", emoji: "👔", color: "from-pink-500" },
    { id: 3, name: "Food & Beverage", emoji: "🍔", color: "from-orange-500" },
    { id: 4, name: "Home & Garden", emoji: "🏠", color: "from-green-500" },
    { id: 5, name: "Sports", emoji: "⚽", color: "from-purple-500" },
    { id: 6, name: "Beauty", emoji: "💄", color: "from-rose-500" },
  ];

  const trendingShops = [
    {
      id: 1,
      name: "TechHub",
      category: "Electronics",
      rating: 4.8,
      floor: "2nd Floor",
      image: "📱",
    },
    {
      id: 2,
      name: "Fashion Corner",
      category: "Fashion",
      rating: 4.6,
      floor: "1st Floor",
      image: "👔",
    },
    {
      id: 3,
      name: "Foody's Delight",
      category: "Food & Beverage",
      rating: 4.9,
      floor: "G Floor",
      image: "🍔",
    },
    {
      id: 4,
      name: "Home Paradise",
      category: "Home & Garden",
      rating: 4.7,
      floor: "3rd Floor",
      image: "🏠",
    },
  ];

  const topOffers = [
    {
      id: 1,
      shop: "TechHub",
      discount: 40,
      originalPrice: 999,
      offerPrice: 599,
      product: "Wireless Earbuds",
    },
    {
      id: 2,
      shop: "Fashion Corner",
      discount: 50,
      originalPrice: 2000,
      offerPrice: 1000,
      product: "Summer Collection",
    },
    {
      id: 3,
      shop: "Foody's Delight",
      discount: 30,
      originalPrice: 500,
      offerPrice: 350,
      product: "Combo Meal",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <UserHeader />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold font-poppins mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Discover Your Favorite Shops
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Find amazing deals, exclusive offers, and premium products from
              the best shops in our mall.
            </p>
            <div className="flex gap-4">
              <Link to="/shops">
                <AstraButton size="lg">Explore Shops</AstraButton>
              </Link>
              <Link to="/offers">
                <AstraButton size="lg" variant="secondary">
                  View Offers
                </AstraButton>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="text-9xl mb-4 animate-float">🛍️</div>
            <p className="text-gray-500">Premium Shopping Experience</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-16">
          <AstraGlassPanel className="max-w-2xl mx-auto">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search shops, products, offers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-white/50 border border-white/30 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              />
              <AstraButton size="md">
                <Search size={20} />
              </AstraButton>
            </div>
          </AstraGlassPanel>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-poppins mb-8 text-gray-900">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <AstraGradientCard key={cat.id} gradient="primary">
                <div className="text-center p-4">
                  <div className="text-4xl mb-3">{cat.emoji}</div>
                  <h3 className="font-semibold">{cat.name}</h3>
                </div>
              </AstraGradientCard>
            ))}
          </div>
        </div>

        {/* Trending Shops */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 flex items-center gap-2">
              <TrendingUp className="text-blue-600" />
              Trending Shops
            </h2>
            <Link to="/shops" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
              View All <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingShops.map((shop) => (
              <Link key={shop.id} to={`/shop/${shop.id}`}>
                <AstraGradientCard gradient="secondary">
                  <div className="text-4xl mb-3 text-center">{shop.image}</div>
                  <h3 className="font-semibold text-lg mb-2">{shop.name}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Star size={16} fill="white" />
                      <span>{shop.rating} Rating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{shop.floor}</span>
                    </div>
                  </div>
                </AstraGradientCard>
              </Link>
            ))}
          </div>
        </div>

        {/* Top Offers */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 flex items-center gap-2">
              <Flame className="text-orange-500" />
              Top Offers Today
            </h2>
            <Link to="/offers" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
              See All <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {topOffers.map((offer) => (
              <AstraGlassPanel key={offer.id}>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">
                        {offer.product}
                      </h4>
                      <p className="text-sm text-gray-600">{offer.shop}</p>
                    </div>
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm flex items-center gap-1">
                      <Zap size={14} />
                      {offer.discount}% OFF
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex gap-2">
                      <span className="line-through text-gray-400">
                        ${offer.originalPrice}
                      </span>
                      <span className="text-2xl font-bold text-blue-600">
                        ${offer.offerPrice}
                      </span>
                    </div>
                  </div>
                  <AstraButton size="md" variant="primary" className="w-full">
                    View Offer
                  </AstraButton>
                </div>
              </AstraGlassPanel>
            ))}
          </div>
        </div>

        {/* Floor Map */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold font-poppins mb-8 text-gray-900">
            Mall Layout
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { floor: "G Floor", shops: 12, emoji: "🏪" },
              { floor: "1st Floor", shops: 15, emoji: "🏬" },
              { floor: "2nd Floor", shops: 18, emoji: "🛒" },
              { floor: "3rd Floor", shops: 10, emoji: "🎯" },
            ].map((item) => (
              <AstraGradientCard key={item.floor} gradient="tertiary">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      {item.floor}
                    </h3>
                    <p className="text-sm opacity-90">{item.shops} Shops</p>
                  </div>
                  <div className="text-5xl">{item.emoji}</div>
                </div>
              </AstraGradientCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">Super Mall Web Application</p>
          <p className="text-sm opacity-90">
            © 2024 All Rights Reserved. Premium Shopping Experience.
          </p>
        </div>
      </footer>
    </div>
  );
}
