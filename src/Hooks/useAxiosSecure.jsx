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
      // console.log('securepafe', token)
      config.headers.authorization = `Bearer ${token}`;
      // console.log('iha config',config)
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  // Add a response interceptor
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
        const status = error.response?.status ;
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