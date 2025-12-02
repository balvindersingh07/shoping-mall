import React, { useState } from "react";
import { AdminHeader } from "@/components/Layout/AdminHeader";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";
import { AstraButton } from "@/components/ui/AstraButton";
import { X } from "lucide-react";

export default function CompareAdmin() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const products = [
    {
      id: "1",
      name: "Wireless Earbuds Pro",
      shop: "TechHub",
      price: 599,
      rating: 4.8,
      battery: "24 hours",
      features: ["Noise Cancelling", "Touch Control", "Wireless Charging"],
    },
    {
      id: "2",
      name: "Premium Headphones",
      shop: "TechHub",
      price: 1299,
      rating: 4.9,
      battery: "30 hours",
      features: ["Studio Quality", "Bluetooth 5.2", "Foldable Design"],
    },
    {
      id: "3",
      name: "Budget Earbuds",
      shop: "TechHub",
      price: 299,
      rating: 4.3,
      battery: "12 hours",
      features: ["Basic Controls", "Compact", "Affordable"],
    },
    {
      id: "4",
      name: "Studio Monitors",
      shop: "TechHub",
      price: 1999,
      rating: 4.7,
      battery: "N/A",
      features: ["Professional Grade", "3.5mm Jack", "Loud Speakers"],
    },
  ];

  const toggleProduct = (productId: string) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else if (selectedProducts.length < 4) {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const selectedData = products.filter((p) => selectedProducts.includes(p.id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <AdminHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-2">
            Compare Products (Admin)
          </h1>
          <p className="text-gray-600">
            Select up to 4 products to compare
          </p>
        </div>

        {/* Product Selection Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Available Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <AstraGlassPanel
                key={product.id}
                className={`cursor-pointer transition-all ${
                  selectedProducts.includes(product.id)
                    ? "ring-2 ring-blue-500 bg-blue-50"
                    : ""
                }`}
                onClick={() => toggleProduct(product.id)}
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
                      selectedProducts.includes(product.id)
                        ? "secondary"
                        : "primary"
                    }
                    className="w-full"
                  >
                    {selectedProducts.includes(product.id) ? "Remove" : "Select"}
                  </AstraButton>
                </div>
              </AstraGlassPanel>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        {selectedData.length > 0 && (
          <div>
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
                    {selectedData.map((product) => (
                      <th key={product.id} className="px-6 py-4 text-center font-semibold">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-sm">
                              {product.name}
                            </div>
                            <div className="text-xs opacity-90">
                              ${product.price}
                            </div>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleProduct(product.id);
                            }}
                            className="hover:bg-white/20 p-1 rounded ml-2"
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
                    { label: "Price", key: "price" },
                  ].map((feature) => (
                    <tr
                      key={feature.key}
                      className="border-b border-gray-200 hover:bg-blue-50"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-900">
                        {feature.label}
                      </td>
                      {selectedData.map((product) => (
                        <td
                          key={product.id}
                          className="px-6 py-4 text-center text-gray-700"
                        >
                          {feature.key === "price"
                            ? `$${product.price}`
                            : feature.key === "rating"
                            ? `${product.rating}/5`
                            : product[feature.key as keyof typeof product]}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* Features Row */}
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      Key Features
                    </td>
                    {selectedData.map((product) => (
                      <td key={product.id} className="px-6 py-4 text-center">
                        <ul className="text-sm text-gray-700 space-y-1">
                          {product.features.map((feature, idx) => (
                            <li key={idx}>✓ {feature}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedData.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📊</div>
            <p className="text-gray-600 text-lg">
              Select products from the list above to start comparing
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
