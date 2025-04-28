
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ubertrix-background p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 text-ubertrix-primary">404</h1>
        <p className="text-xl md:text-3xl font-bold mb-6 text-white">Page Not Found</p>
        <p className="text-gray-400 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link 
            to="/" 
            className="btn-primary w-full flex items-center justify-center"
          >
            <Home className="mr-2" size={18} />
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn-outline w-full flex items-center justify-center"
          >
            <ArrowLeft className="mr-2" size={18} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
