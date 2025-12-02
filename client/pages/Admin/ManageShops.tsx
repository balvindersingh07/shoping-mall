import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Edit2, Trash2, Eye, Plus } from "lucide-react";
import { AdminHeader } from "@/components/Layout/AdminHeader";
import { AstraButton } from "@/components/ui/AstraButton";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";

export default function ManageShops() {
  const [searchTerm, setSearchTerm] = useState("");

  const shops = [
    {
      id: 1,
      name: "TechHub",
      category: "Electronics",
      floor: "2nd Floor",
      owner: "Raj Kumar",
      status: "Active",
    },
    {
      id: 2,
      name: "Fashion Corner",
      category: "Fashion",
      floor: "1st Floor",
      owner: "Priya Singh",
      status: "Active",
    },
    {
      id: 3,
      name: "Foody's Delight",
      category: "Food & Beverage",
      floor: "G Floor",
      owner: "Amit Patel",
      status: "Active",
    },
    {
      id: 4,
      name: "Home Paradise",
      category: "Home & Garden",
      floor: "3rd Floor",
      owner: "Neha Sharma",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Sport Zone",
      category: "Sports",
      floor: "2nd Floor",
      owner: "Vikram Singh",
      status: "Active",
    },
    {
      id: 6,
      name: "Beauty Bliss",
      category: "Beauty",
      floor: "1st Floor",
      owner: "Ananya Gupta",
      status: "Active",
    },
  ];

  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <AdminHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-2">
              Manage Shops
            </h1>
            <p className="text-gray-600">View and manage all shops in the mall</p>
          </div>
          <Link to="/admin/create-shop">
            <AstraButton size="lg">
              <Plus size={20} />
              New Shop
            </AstraButton>
          </Link>
        </div>

        {/* Search and Filters */}
        <AstraGlassPanel className="mb-8">
          <input
            type="text"
            placeholder="Search shops..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </AstraGlassPanel>

        {/* Table */}
        <AstraGlassPanel>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Shop Name
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Floor
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Owner
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
                {filteredShops.map((shop) => (
                  <tr
                    key={shop.id}
                    className="border-b border-gray-200 hover:bg-blue-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {shop.name}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{shop.category}</td>
                    <td className="px-6 py-4 text-gray-600">{shop.floor}</td>
                    <td className="px-6 py-4 text-gray-600">{shop.owner}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          shop.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {shop.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-3">
                        <button className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors">
                          <Eye size={18} />
                        </button>
                        <button className="p-2 text-orange-600 hover:bg-orange-100 rounded-lg transition-colors">
                          <Edit2 size={18} />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center text-gray-600">
            Showing {filteredShops.length} of {shops.length} shops
          </div>
        </AstraGlassPanel>
      </section>
    </div>
  );
}
