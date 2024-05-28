import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import HeadingTItle from "../../../Component/HeadingTitle/HeadingTItle";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };
  const handleRoleChange = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        toast.success("id paici");
        axiosSecure.patch(`/users/admin/${id}`).then((res) => {
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "Updated!",
              text: "Your role has been Updated.",
              icon: "success",
            });
          }
          refetch();
        });
      }
    });
  };

  return (
    <div>
      <div className="">
        <HeadingTItle
          subHeading={"All Users"}
          heading={"Managa All Users"}
        ></HeadingTItle>
        <h1 className="text-center">All Users {users.length} </h1>
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
              {users?.map((user, idx) => (
                <tr key={user._id} className="hover">
                  <th> {idx + 1} </th>
                  <td> {user?.name} </td>
                  <td>{user?.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleRoleChange(user._id)}
                        className="p-1 rounded-lg bg-slate-300 "
                      >
                        <FaUsers className="text-xl"> </FaUsers>
                      </button>
                    )}
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="p-2 rounded-lg bg-slate-300 "
                    >
                      {" "}
                      <FaTrash></FaTrash>{" "}
                    </button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
