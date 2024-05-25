import { useContext } from "react";
import { AuthCustomContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RotateLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthCustomContext);
  const location = useLocation() ;
  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center">
        <RotateLoader color="#36d7b7" size={15} speedMultiplier={2} />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from:location}} replace ></Navigate>;
};

export default PrivateRoutes;
