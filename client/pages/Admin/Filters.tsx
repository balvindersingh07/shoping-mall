import React, { useState } from "react";
import { AdminHeader } from "@/components/Layout/AdminHeader";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";
import { AstraButton } from "@/components/ui/AstraButton";
import { Filter, RotateCcw } from "lucide-react";

export default function Filters() {
  const [filters, setFilters] = useState({
    category: "",
    floor: "",
    priceRange: [0, 5000],
    rating: 0,
    status: "all",
    sortBy: "name",
  });

  const categories = [
    "All Categories",
    "Electronics",
    "Fashion",
    "Food & Beverage",
    "Home & Garden",
    "Sports",
    "Beauty",
  ];

  const floors = ["All Floors", "G Floor", "1st Floor", "2nd Floor", "3rd Floor"];

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      category: "",
      floor: "",
      priceRange: [0, 5000],
      rating: 0,
      status: "all",
      sortBy: "name",
    });
  };

  const applyFilters = () => {
    alert(
      `Filters applied:\n${JSON.stringify(filters, null, 2)}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <AdminHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-2 flex items-center gap-2">
            <Filter size={40} className="text-blue-600" />
            Advanced Filters
          </h1>
          <p className="text-gray-600">
            Apply filters to search and organize shops and products
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Panel */}
          <div className="lg:col-span-1">
            <AstraGlassPanel className="sticky top-20">
              <div className="space-y-6">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) =>
                      handleFilterChange("category", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Floor Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Floor
                  </label>
                  <select
                    value={filters.floor}
                    onChange={(e) => handleFilterChange("floor", e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {floors.map((floor) => (
                      <option key={floor} value={floor}>
                        {floor}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Price Range
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      value={filters.priceRange[1]}
                      onChange={(e) =>
                        handleFilterChange("priceRange", [
                          filters.priceRange[0],
                          parseInt(e.target.value),
                        ])
                      }
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${filters.priceRange[0]}</span>
                      <span>${filters.priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Minimum Rating
                  </label>
                  <div className="flex gap-2">
                    {[0, 3, 4, 4.5, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => handleFilterChange("rating", rating)}
                        className={`px-3 py-2 rounded-lg transition-all text-sm font-semibold ${
                          filters.rating === rating
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {rating === 0 ? "All" : `${rating}+`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status Filter */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Status
                  </label>
                  <div className="space-y-2">
                    {["all", "Active", "Inactive"].map((status) => (
                      <label
                        key={status}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="status"
                          value={status}
                          checked={filters.status === status}
                          onChange={(e) =>
                            handleFilterChange("status", e.target.value)
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700 capitalize">
                          {status}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Sort By
                  </label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) =>
                      handleFilterChange("sortBy", e.target.value)
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="name">Name (A-Z)</option>
                    <option value="price-low">Price (Low to High)</option>
                    <option value="price-high">Price (High to Low)</option>
                    <option value="rating">Rating</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <AstraButton
                    onClick={applyFilters}
                    size="md"
                    className="w-full"
                  >
                    Apply Filters
                  </AstraButton>
                  <button
                    onClick={resetFilters}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-gray-700 flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={16} />
                    Reset
                  </button>
                </div>
              </div>
            </AstraGlassPanel>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-3">
            <AstraGlassPanel>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Filter Summary
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-gray-600">Category</p>
                      <p className="font-semibold text-gray-900">
                        {filters.category || "All"}
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-gray-600">Floor</p>
                      <p className="font-semibold text-gray-900">
                        {filters.floor || "All"}
                      </p>
                    </div>
                    <div className="p-4 bg-pink-50 rounded-lg">
                      <p className="text-sm text-gray-600">Price Range</p>
                      <p className="font-semibold text-gray-900">
                        ${filters.priceRange[0]} - ${filters.priceRange[1]}
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <p className="text-sm text-gray-600">Minimum Rating</p>
                      <p className="font-semibold text-gray-900">
                        {filters.rating === 0
                          ? "Any"
                          : `${filters.rating}+ stars`}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🎯 Available Filters
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>✓ Filter by shop category (Electronics, Fashion, etc.)</p>
                    <p>✓ Filter by mall floor location</p>
                    <p>✓ Filter by price range (0 - 5000)</p>
                    <p>✓ Filter by minimum rating (3.0 - 5.0 stars)</p>
                    <p>✓ Filter by shop status (Active/Inactive)</p>
                    <p>✓ Sort results by name, price, rating, or date</p>
                    <p>✓ Combine multiple filters for precise search</p>
                  </div>
                </div>
              </div>
            </AstraGlassPanel>
          </div>
        </div>
      </section>
    </div>
  );
}
