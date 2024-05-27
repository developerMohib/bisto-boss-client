import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  console.log(location?.state, "logi in");

  const handleGoogleLogin = () => {
    loginWithGoogle().then(() => {
      toast.success("login successfully");
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md"
      >
        <img
          className="w-5 mr-2"
          src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleLogin;
