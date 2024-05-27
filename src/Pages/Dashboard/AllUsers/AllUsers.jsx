import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  return (
    <div>
      <div className="flex justify-center items-center">
        <h1> Hello i am all users {users.length} </h1>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users?.map((user, idx) => <tr key={user._id} className="hover">
                <th> {idx + 1 } </th>
                <td> {user?.name} </td>
                <td>{user?.email}</td>
                <td> <button className="p-1 rounded-lg bg-slate-300 " ><FaUsers className="text-xl" > </FaUsers></button> </td>
                <td> <button className="p-2 rounded-lg bg-slate-300 " > <FaTrash></FaTrash> </button> </td>
              </tr> )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
