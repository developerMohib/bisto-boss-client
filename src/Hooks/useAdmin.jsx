import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user} = useAuth();
  const email = user?.email;
  const { data: isAdmin } = useQuery({
    queryKey: [email, 'isAdmin'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${email}`)
      console.log(res.data)
            return res.data?.admin ;
    },
  });
  return [isAdmin];
};

export default useAdmin;
