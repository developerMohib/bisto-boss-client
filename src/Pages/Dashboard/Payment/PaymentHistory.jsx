import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const email = user?.email;
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/confirmd-order/${email}`);
      return res.data;
    },
  });

  return (
    <div>
      <h1 className="text-2xl font-semibold">
        {" "}
        Total Payments : {payments.length}{" "}
      </h1>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Category</th>
              <th>Transition ID</th>
              <th>Total Price</th>
              <th>Payment Date </th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((item) => (
              <tr key={item._id}>
                <th></th>
                <td>
                  <p className=" text-gray-500 "> {item.email} </p>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>{item.tarnsitionId}</td>
                <td>{item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">{item.date}</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Table */}
    </div>
  );
};

export default PaymentHistory;
