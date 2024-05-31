import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useContext } from "react";
import { AuthCustomContext } from "../AuthProvider/AuthProvider";
// import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  // const axiosPublic = useAxiosPublic() ;
  // const { user } = useAuth();
  const {user} = useContext(AuthCustomContext)
  const email = user?.email;

  const { data: isAdmin } = useQuery({
    queryKey: [email, "isAdmin"],
    queryFn: async () => {
      if(user?.email){
        const res = await axiosSecure.get(`/users/admin/${email}`);
      // console.log(res.data)
      return res.data?.admin;
      }
    },
    enabled: !!localStorage.getItem("access-token"),
  });
  return [isAdmin];
};

export default useAdmin;
