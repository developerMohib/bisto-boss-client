import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaCar, FaDollarSign, FaProductHunt, FaUsers } from "react-icons/fa";
const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data } = useQuery({
    queryKey: ["revenue"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-states");
      return res.data;
    },
  });
  // console.log(data, "revenue data");
  return (
    <div>
      <div>
        <h1>
          Hello, Wellcome beck{" "}
          <span className="uppercase font-semibold text-xl text-slate-800">
            {" "}
            {user?.displayName}{" "}
          </span>{" "}
        </h1>
        <div>

          <div className="stats shadow">
            <div className="stat flex items-center">
              <div>
                <FaDollarSign className="text-4xl"></FaDollarSign>
              </div>
              <div>
                <p className="stat-value"> {data?.revenue} </p>
                <p className="stat-title">Revenue</p>
              </div>
            </div>

            <div className="stat flex items-center">
              <div>
                <FaUsers className="text-4xl"> </FaUsers>
              </div>
              <div>
          <p className="stat-value">{data?.estimateUser} </p>
                <p className="stat-title">Users</p>
              </div>
            </div>

            <div className="stat flex items-center">
              <div>
                <FaProductHunt className="text-4xl"></FaProductHunt>
              </div>
              <div>
                <p className="stat-value"> {data?.estimateItem} </p>
                <p className="stat-title">Products</p>
              </div>
            </div>
            <div className="stat flex items-center">
              <div>
                <FaCar className="text-4xl"> </FaCar>
              </div>
              <div>
                <p className="stat-value"> {data?.estimaOrder} </p>
                <p className="stat-title">Order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
