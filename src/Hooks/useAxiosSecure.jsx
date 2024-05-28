import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: `http://localhost:5000`,
});
const useAxiosSecure = () => {
    const navigate = useNavigate() ;
    const {logOut} = useAuth() ;
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interseptors");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // Add a response interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      console.log(response, "response inside of axios secure interceptors");
      return response;
    },
    async function (error) {
        const status = error.response.status ;
        console.log(status, "error inside of axios secure interceptors");
        if(status === 401 || status === 403){
            // log out kore dibo and log in page a jaw
            await logOut()
            navigate('/login')
        }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;