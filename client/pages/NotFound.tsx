import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AstraButton } from "@/components/ui/AstraButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-600 flex items-center justify-center px-4">
      <div className="text-center space-y-8">
        <div className="text-8xl font-black text-white drop-shadow-lg">404</div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-4 font-poppins">
            Page Not Found
          </h1>
          <p className="text-white/90 text-lg mb-8">
            The page you're looking for doesn't exist
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <AstraButton size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
              Back to Home
            </AstraButton>
          </Link>
          <Link to="/shops">
            <AstraButton size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Browse Shops
            </AstraButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
