
import { Navigate, useLocation } from 'react-router-dom';
import { RotateLoader } from 'react-spinners';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const [isAdmin, isLoading] = useAdmin() ;
    const location = useLocation() ;

    if (loading || isLoading) {
      return (
        <div className="flex h-screen justify-center items-center">
          <RotateLoader color="#36d7b7" size={15} speedMultiplier={2} />
        </div>
      );
    }
    if (user && isAdmin ) {
      return children;
    }
    return <Navigate to="/" state={{ from:location}} replace ></Navigate>;
  };
  

export default AdminRoute;