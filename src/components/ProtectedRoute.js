import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router"; // Import useRouter from Next.js
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter(); 

  useEffect(() => {
    
    if (!isAuthenticated) {
      router.push("/"); 
    }
  }, [isAuthenticated]);

  return children;
};

export default ProtectedRoute;
