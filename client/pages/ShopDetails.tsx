import React from "react";
import { Link, useParams } from "react-router-dom";
import { Star, MapPin, Phone, Mail, Clock, ArrowLeft, ShoppingBag } from "lucide-react";
import { UserHeader } from "@/components/Layout/UserHeader";
import { AstraButton } from "@/components/ui/AstraButton";
import { AstraGradientCard } from "@/components/ui/AstraGradientCard";
import { AstraGlassPanel } from "@/components/ui/AstraGlassPanel";

export default function ShopDetails() {
  const { id } = useParams();

  const shopDetails = {
    id: 1,
    name: "TechHub",
    category: "Electronics",
    floor: "2nd Floor",
    image: "📱",
    rating: 4.8,
    reviews: 245,
    owner: "Raj Kumar",
    description:
      "Your one-stop shop for all latest electronics and gadgets. We offer premium quality products with competitive prices and excellent customer service.",
    phone: "+91-9876543210",
    email: "contact@techhub.com",
    hours: "10:00 AM - 10:00 PM",
    products: [
      {
        id: 1,
        name: "Wireless Earbuds",
        price: 599,
        originalPrice: 999,
        image: "🎧",
      },
      {
        id: 2,
        name: "USB-C Cable",
        price: 199,
        originalPrice: 399,
        image: "🔌",
      },
      {
        id: 3,
        name: "Phone Case",
        price: 299,
        originalPrice: 599,
        image: "📱",
      },
      {
        id: 4,
        name: "Screen Protector",
        price: 149,
        originalPrice: 299,
        image: "🛡️",
      },
    ],
    offers: [
      {
        id: 1,
        product: "Wireless Earbuds",
        discount: 40,
        price: 599,
        originalPrice: 999,
      },
      {
        id: 2,
        product: "USB-C Cable",
        discount: 50,
        price: 199,
        originalPrice: 399,
      },
      {
        id: 3,
        product: "Screen Protector",
        discount: 50,
        price: 149,
        originalPrice: 299,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      <UserHeader />

      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link to="/shops" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft size={20} />
          Back to Shops
        </Link>

        {/* Shop Hero Banner */}
        <AstraGradientCard gradient="secondary" className="mb-8 !p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-7xl mb-6">{shopDetails.image}</div>
              <h1 className="text-4xl font-bold mb-2 font-poppins">
                {shopDetails.name}
              </h1>
              <p className="text-lg opacity-90 mb-4">{shopDetails.category}</p>
              <div className="flex items-center gap-2 text-lg">
                <Star fill="white" />
                <span>
                  {shopDetails.rating} ({shopDetails.reviews} reviews)
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <AstraGlassPanel className="!bg-white/10">
                <div className="space-y-3 text-white">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="mt-1" />
                    <div>
                      <p className="text-sm opacity-75">Location</p>
                      <p className="font-semibold">{shopDetails.floor}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={20} className="mt-1" />
                    <div>
                      <p className="text-sm opacity-75">Hours</p>
                      <p className="font-semibold">{shopDetails.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShoppingBag size={20} className="mt-1" />
                    <div>
                      <p className="text-sm opacity-75">Owner</p>
                      <p className="font-semibold">{shopDetails.owner}</p>
                    </div>
                  </div>
                </div>
              </AstraGlassPanel>
            </div>
          </div>
        </AstraGradientCard>

        {/* Contact Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <AstraGlassPanel>
            <div className="space-y-3">
              <Phone size={24} className="text-blue-600" />
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">{shopDetails.phone}</p>
            </div>
          </AstraGlassPanel>
          <AstraGlassPanel>
            <div className="space-y-3">
              <Mail size={24} className="text-purple-600" />
              <h3 className="font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">{shopDetails.email}</p>
            </div>
          </AstraGlassPanel>
          <AstraGlassPanel>
            <AstraButton size="lg" variant="primary" className="w-full">
              Contact Merchant
            </AstraButton>
          </AstraGlassPanel>
        </div>

        {/* Shop Description */}
        <AstraGlassPanel className="mb-12">
          <h2 className="text-2xl font-bold mb-4 font-poppins text-gray-900">
            About {shopDetails.name}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {shopDetails.description}
          </p>
        </AstraGlassPanel>

        {/* Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-poppins text-gray-900">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shopDetails.products.map((product) => (
              <AstraGlassPanel key={product.id}>
                <div className="space-y-3">
                  <div className="text-4xl text-center">{product.image}</div>
                  <h3 className="font-semibold text-gray-900">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price}
                    </span>
                    <span className="line-through text-gray-400 text-sm">
                      ${product.originalPrice}
                    </span>
                  </div>
                  <AstraButton size="sm" variant="primary" className="w-full">
                    Add to Cart
                  </AstraButton>
                </div>
              </AstraGlassPanel>
            ))}
          </div>
        </div>

        {/* Active Offers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 font-poppins text-gray-900">
            🔥 Active Offers
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {shopDetails.offers.map((offer) => (
              <AstraGradientCard key={offer.id} gradient="primary">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{offer.product}</h3>
                    <div className="bg-white/20 px-3 py-1 rounded-full">
                      <p className="font-black text-lg">{offer.discount}%</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="line-through opacity-75">
                      ${offer.originalPrice}
                    </span>
                    <span className="text-2xl font-bold">
                      ${offer.price}
                    </span>
                  </div>
                  <AstraButton
                    size="md"
                    variant="outline"
                    className="w-full text-white border-white hover:bg-white/20"
                  >
                    Claim Offer
                  </AstraButton>
                </div>
              </AstraGradientCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
