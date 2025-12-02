import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Gift,
  Layers,
  Building2,
  TrendingUp,
  Clock,
  ArrowRight,
  Plus,
} from "lucide-react";
import { AdminHeader } from "@/components/Layout/AdminHeader";
import { AstraButton } from "@/components/ui/AstraButton";
import { AstraGradientCard } from "@/components/ui/AstraGradientCard";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";

export default function Dashboard() {
  const stats = [
    {
      label: "Total Shops",
      value: 45,
      icon: ShoppingBag,
      color: "from-blue-500 to-purple-600",
    },
    {
      label: "Active Offers",
      value: 128,
      icon: Gift,
      color: "from-purple-500 to-pink-600",
    },
    {
      label: "Categories",
      value: 12,
      icon: Layers,
      color: "from-teal-500 to-blue-600",
    },
    {
      label: "Mall Floors",
      value: 4,
      icon: Building2,
      color: "from-pink-500 to-red-600",
    },
  ];

  const quickActions = [
    {
      label: "Create New Shop",
      icon: Plus,
      path: "/admin/create-shop",
      color: "primary",
    },
    {
      label: "Add New Offer",
      icon: Gift,
      path: "/admin/manage-offers",
      color: "secondary",
    },
    {
      label: "Manage Categories",
      icon: Layers,
      path: "/admin/manage-categories",
      color: "tertiary",
    },
    {
      label: "View All Shops",
      icon: ShoppingBag,
      path: "/admin/manage-shops",
      color: "primary",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      action: "New shop created",
      details: "TechHub - Electronics",
      time: "2 hours ago",
      icon: "🆕",
    },
    {
      id: 2,
      action: "Offer activated",
      details: "50% off on Fashion items",
      time: "4 hours ago",
      icon: "🎉",
    },
    {
      id: 3,
      action: "Shop updated",
      details: "Foody's Delight - 3rd Floor",
      time: "6 hours ago",
      icon: "✏️",
    },
    {
      id: 4,
      action: "Offer expired",
      details: "Summer Collection Deal",
      time: "1 day ago",
      icon: "⏰",
    },
    {
      id: 5,
      action: "Category added",
      details: "Home & Garden",
      time: "2 days ago",
      icon: "📂",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <AdminHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-2">
            Welcome Back, Admin! 👋
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your mall shops, offers, and categories from here.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <AstraGradientCard key={stat.label} gradient="primary">
                <div className="space-y-4">
                  <Icon size={32} />
                  <div>
                    <p className="text-sm opacity-90">{stat.label}</p>
                    <h3 className="text-4xl font-black">{stat.value}</h3>
                  </div>
                </div>
              </AstraGradientCard>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold font-poppins mb-6 text-gray-900">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.label} to={action.path}>
                  <AstraGlassPanel className="h-full hover:shadow-lg transition-all cursor-pointer">
                    <div className="space-y-4 text-center">
                      <Icon size={32} className="mx-auto text-blue-600" />
                      <p className="font-semibold text-gray-900">
                        {action.label}
                      </p>
                      <AstraButton size="sm" variant={action.color as any} className="w-full">
                        Go <ArrowRight size={16} />
                      </AstraButton>
                    </div>
                  </AstraGlassPanel>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2">
            <AstraGlassPanel>
              <h2 className="text-2xl font-bold font-poppins mb-6 text-gray-900 flex items-center gap-2">
                <Clock size={24} className="text-blue-600" />
                Recent Activity
              </h2>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div
                    key={activity.id}
                    className={`flex gap-4 pb-4 ${
                      index !== recentActivity.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <div className="text-3xl">{activity.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {activity.action}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {activity.details}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 whitespace-nowrap">
                      {activity.time}
                    </p>
                  </div>
                ))}
              </div>
            </AstraGlassPanel>
          </div>

          <AstraGlassPanel>
            <h2 className="text-xl font-bold font-poppins mb-6 text-gray-900">
              System Status
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">
                    Server Health
                  </span>
                  <span className="text-green-600 font-bold">Good</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">
                    Database
                  </span>
                  <span className="text-green-600 font-bold">Online</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-gray-900">
                    API Status
                  </span>
                  <span className="text-green-600 font-bold">Active</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </AstraGlassPanel>
        </div>
      </section>
    </div>
  );
}
