import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth";

// import axios from "axios";

const useCartData = () => {
    const axiosSecure = useAxiosSecure() ;
    const {user} = useAuth();

    const email = user?.email ;
    const {data: cart = [], refetch} = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${email}`) ;
            // console.log(res.data)
            return res.data ;
        }
    })
    return [cart, refetch]
};

export default useCartData;