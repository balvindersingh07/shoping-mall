import React, { useState } from "react";
import { Plus, Trash2, Edit2, Layers, Building2 } from "lucide-react";
import { AdminHeader } from "@/components/Layout/AdminHeader";
import { AstraButton } from "@/components/ui/AstraButton";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";

export default function ManageCategories() {
  const [newCategory, setNewCategory] = useState("");
  const [newFloor, setNewFloor] = useState("");

  const [categories, setCategories] = useState([
    "Electronics",
    "Fashion",
    "Food & Beverage",
    "Home & Garden",
    "Sports",
    "Beauty",
  ]);

  const [floors, setFloors] = useState([
    "G Floor",
    "1st Floor",
    "2nd Floor",
    "3rd Floor",
  ]);

  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories([...categories, newCategory]);
      setNewCategory("");
    }
  };

  const addFloor = () => {
    if (newFloor.trim() && !floors.includes(newFloor)) {
      setFloors([...floors, newFloor]);
      setNewFloor("");
    }
  };

  const removeCategory = (cat: string) => {
    setCategories(categories.filter((c) => c !== cat));
  };

  const removeFloor = (f: string) => {
    setFloors(floors.filter((fl) => fl !== f));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <AdminHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-2">
            Manage Categories & Floors
          </h1>
          <p className="text-gray-600">
            Add, edit, and manage shop categories and mall floors
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Categories Panel */}
          <AstraGlassPanel>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 font-poppins">
                <Layers className="text-blue-600" size={28} />
                Categories
              </h2>

              {/* Add Category Form */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-900">
                  Add New Category
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addCategory()}
                    placeholder="Enter category name"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <AstraButton onClick={addCategory} size="md">
                    <Plus size={20} />
                  </AstraButton>
                </div>
              </div>

              {/* Categories List */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Current Categories ({categories.length})
                </h3>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className="flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{cat}</span>
                      <div className="flex gap-2">
                        <button className="p-2 text-orange-600 hover:bg-orange-100 rounded">
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => removeCategory(cat)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AstraGlassPanel>

          {/* Floors Panel */}
          <AstraGlassPanel>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 font-poppins">
                <Building2 className="text-purple-600" size={28} />
                Mall Floors
              </h2>

              {/* Add Floor Form */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-900">
                  Add New Floor
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newFloor}
                    onChange={(e) => setNewFloor(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && addFloor()}
                    placeholder="e.g., 4th Floor"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <AstraButton onClick={addFloor} size="md" variant="secondary">
                    <Plus size={20} />
                  </AstraButton>
                </div>
              </div>

              {/* Floors List */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Current Floors ({floors.length})
                </h3>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {floors.map((floor) => (
                    <div
                      key={floor}
                      className="flex items-center justify-between p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{floor}</span>
                      <div className="flex gap-2">
                        <button className="p-2 text-orange-600 hover:bg-orange-100 rounded">
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => removeFloor(floor)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AstraGlassPanel>
        </div>

        {/* Summary */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <AstraGlassPanel>
            <div className="text-center space-y-3">
              <Layers size={40} className="mx-auto text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                {categories.length}
              </h3>
              <p className="text-gray-600">Total Categories</p>
            </div>
          </AstraGlassPanel>
          <AstraGlassPanel>
            <div className="text-center space-y-3">
              <Building2 size={40} className="mx-auto text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                {floors.length}
              </h3>
              <p className="text-gray-600">Total Floors</p>
            </div>
          </AstraGlassPanel>
        </div>
      </section>
    </div>
  );
}
