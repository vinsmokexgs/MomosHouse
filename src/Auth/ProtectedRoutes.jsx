import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({ components }) {
  const { isAuthenticated, isLoading } = useAuth0();

  console.log(isAuthenticated ,isLoading)
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? components : null;
}

export default ProtectedRoutes;
