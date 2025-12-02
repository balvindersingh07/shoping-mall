import React, { useState } from "react";
import { Plus, Edit2, Trash2, Eye } from "lucide-react";
import { AdminHeader } from "@/components/Layout/AdminHeader";
import { AstraButton } from "@/components/ui/AstraButton";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";

export default function ManageOffers() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    product: "",
    mrp: "",
    offerPrice: "",
    shop: "",
    endDate: "",
  });

  const offers = [
    {
      id: 1,
      product: "Wireless Earbuds",
      mrp: 999,
      offerPrice: 599,
      discount: 40,
      shop: "TechHub",
      status: "Active",
    },
    {
      id: 2,
      product: "Summer Collection",
      mrp: 2000,
      offerPrice: 1000,
      discount: 50,
      shop: "Fashion Corner",
      status: "Active",
    },
    {
      id: 3,
      product: "Combo Meal",
      mrp: 500,
      offerPrice: 350,
      discount: 30,
      shop: "Foody's Delight",
      status: "Active",
    },
    {
      id: 4,
      product: "Bed Sheets Set",
      mrp: 1500,
      offerPrice: 899,
      discount: 40,
      shop: "Home Paradise",
      status: "Inactive",
    },
  ];

  const shops = ["TechHub", "Fashion Corner", "Foody's Delight", "Home Paradise"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Offer created successfully!");
    setFormData({ product: "", mrp: "", offerPrice: "", shop: "", endDate: "" });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <AdminHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-2">
              Manage Offers
            </h1>
            <p className="text-gray-600">Create and manage shop offers</p>
          </div>
          <AstraButton
            size="lg"
            onClick={() => setShowForm(!showForm)}
          >
            <Plus size={20} />
            New Offer
          </AstraButton>
        </div>

        {/* Create Offer Form */}
        {showForm && (
          <AstraGlassPanel className="mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Create New Offer</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    placeholder="Enter product name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Shop *
                  </label>
                  <select
                    name="shop"
                    value={formData.shop}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select shop</option>
                    {shops.map((shop) => (
                      <option key={shop} value={shop}>
                        {shop}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    MRP (Original Price) *
                  </label>
                  <input
                    type="number"
                    name="mrp"
                    value={formData.mrp}
                    onChange={handleChange}
                    placeholder="999"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Offer Price *
                  </label>
                  <input
                    type="number"
                    name="offerPrice"
                    value={formData.offerPrice}
                    onChange={handleChange}
                    placeholder="599"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Auto Discount (%)
                  </label>
                  <input
                    type="text"
                    value={
                      formData.mrp && formData.offerPrice
                        ? Math.round(
                            ((parseInt(formData.mrp) -
                              parseInt(formData.offerPrice)) /
                              parseInt(formData.mrp)) *
                              100
                          )
                        : 0
                    }
                    disabled
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  End Date
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex gap-4">
                <AstraButton type="submit" size="lg" variant="primary">
                  Create Offer
                </AstraButton>
                <AstraButton
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </AstraButton>
              </div>
            </form>
          </AstraGlassPanel>
        )}

        {/* Offers Table */}
        <AstraGlassPanel>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Product
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Shop
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    MRP
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Offer Price
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Discount
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {offers.map((offer) => (
                  <tr
                    key={offer.id}
                    className="border-b border-gray-200 hover:bg-blue-50"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {offer.product}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{offer.shop}</td>
                    <td className="px-6 py-4 text-gray-600">${offer.mrp}</td>
                    <td className="px-6 py-4 text-gray-600 font-bold">
                      ${offer.offerPrice}
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold">
                        {offer.discount}%
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          offer.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {offer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-orange-600 hover:bg-orange-100 rounded-lg">
                          <Edit2 size={18} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AstraGlassPanel>
      </section>
    </div>
  );
}
