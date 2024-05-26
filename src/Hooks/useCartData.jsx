import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth";
// import axios from "axios";

const useCartData = () => {
    const axiosSecure = useAxiosSecure() ;
    const {user} = useAuth();

    const email = user?.email ;
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${email}`) ;
            console.log(res.data)
            return res.data ;
        }
    })
    // if(isLoading){
    //     return (
    //         <div className="flex h-screen justify-center items-center">
    //           <RotateLoader color="#36d7b7" size={15} speedMultiplier={2} />
    //         </div>
    //       );
    // }
    return [cart, refetch]
};

export default useCartData;