import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="text-6xl mb-4 animate-float">🛍️</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2 font-poppins">
          Super Mall
        </h1>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
