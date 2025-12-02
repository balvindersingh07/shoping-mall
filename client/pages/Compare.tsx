import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, X, BarChart3 } from "lucide-react";
import { UserHeader } from "@/components/Layout/UserHeader";
import { AstraButton } from "@/components/ui/AstraButton";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";

export default function Compare() {
  const [selectedProducts, setSelectedProducts] = useState<
    (typeof allProducts)[0][]
  >([]);

  const allProducts = [
    {
      id: 1,
      name: "Wireless Earbuds Pro",
      shop: "TechHub",
      price: 599,
      rating: 4.8,
      battery: "24 hours",
      connectivity: "Bluetooth 5.0",
      warranty: "2 years",
    },
    {
      id: 2,
      name: "Premium Headphones",
      shop: "TechHub",
      price: 1299,
      rating: 4.9,
      battery: "30 hours",
      connectivity: "Bluetooth 5.2",
      warranty: "3 years",
    },
    {
      id: 3,
      name: "Budget Earbuds",
      shop: "TechHub",
      price: 299,
      rating: 4.3,
      battery: "12 hours",
      connectivity: "Bluetooth 4.2",
      warranty: "1 year",
    },
    {
      id: 4,
      name: "Studio Monitors",
      shop: "TechHub",
      price: 1999,
      rating: 4.7,
      battery: "N/A",
      connectivity: "3.5mm Jack",
      warranty: "5 years",
    },
  ];

  const toggleProduct = (product: typeof allProducts[0]) => {
    if (selectedProducts.find((p) => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <UserHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-poppins mb-4 text-gray-900 flex items-center gap-3">
            <BarChart3 className="text-blue-600" size={40} />
            Compare Products
          </h1>
          <p className="text-gray-600 text-lg">
            Select up to 3 products to compare features and prices
          </p>
        </div>

        {/* Product Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Available Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {allProducts.map((product) => (
              <AstraGlassPanel
                key={product.id}
                className={`cursor-pointer transition-all ${
                  selectedProducts.find((p) => p.id === product.id)
                    ? "ring-2 ring-blue-500"
                    : ""
                }`}
                onClick={() => toggleProduct(product)}
              >
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.shop}</p>
                  <div className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </div>
                  <p className="text-sm">⭐ {product.rating}/5</p>
                  <AstraButton
                    size="sm"
                    variant={
                      selectedProducts.find((p) => p.id === product.id)
                        ? "secondary"
                        : "primary"
                    }
                    className="w-full"
                  >
                    {selectedProducts.find((p) => p.id === product.id)
                      ? "Remove"
                      : "Select"}
                  </AstraButton>
                </div>
              </AstraGlassPanel>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Comparison Table
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl shadow-card overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">
                      Features
                    </th>
                    {selectedProducts.map((product) => (
                      <th key={product.id} className="px-6 py-4 text-center font-semibold">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold">{product.name}</div>
                            <div className="text-sm opacity-90">
                              ${product.price}
                            </div>
                          </div>
                          <button
                            onClick={() =>
                              setSelectedProducts(
                                selectedProducts.filter(
                                  (p) => p.id !== product.id
                                )
                              )
                            }
                            className="hover:bg-white/20 p-1 rounded"
                          >
                            <X size={18} />
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Rating", key: "rating" },
                    { label: "Battery Life", key: "battery" },
                    { label: "Connectivity", key: "connectivity" },
                    { label: "Warranty", key: "warranty" },
                  ].map((feature) => (
                    <tr
                      key={feature.key}
                      className="border-b border-gray-200 hover:bg-blue-50"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {feature.label}
                      </td>
                      {selectedProducts.map((product) => (
                        <td
                          key={product.id}
                          className="px-6 py-4 text-center text-gray-700"
                        >
                          {
                            product[
                              feature.key as keyof typeof selectedProducts[0]
                            ] as string
                          }
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Feature Button */}
            <div className="mt-6 text-center">
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors font-semibold">
                <Plus size={20} />
                Add Custom Feature Row
              </button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {selectedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600 text-lg">
              Select products from the list above to start comparing
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
