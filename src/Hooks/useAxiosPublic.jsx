import axios from "axios";

const axiosPublic = axios.create({
  baseURL: `https://bisto-boss-server-phi.vercel.app`,
});
// https://bisto-boss-server-phi.vercel.app/
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;