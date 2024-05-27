import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const FacebookLogin = () => {
  const { loginWithFacebook } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  console.log(location?.state, "logi in");

  const handleFacebookLogin = () => {
    loginWithFacebook().then(() => {
      toast.success("login successfully");
      navigate(from, { replace: true });
    });
  };
  return (
    <div>
      <button
        onClick={handleFacebookLogin}
        className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 my-2 rounded-md"
      >
        <img
          className="w-5 mr-2 "
          src="https://w7.pngwing.com/pngs/561/460/png-transparent-fb-facebook-facebook-logo-social-media-icon-thumbnail.png"
        />
        Sign in with Facebook
      </button>
    </div>
  );
};

export default FacebookLogin;
