import { FaEdit, FaTrashAlt } from "react-icons/fa";
import HeadingTItle from "../../../Component/HeadingTitle/HeadingTItle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useMenu from "../../../Hooks/useMenu";

const ManageItem = () => {
  const axiosSecure = useAxiosSecure() ;
  const [menu,,refetch] = useMenu();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then( async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`)
        console.log(res.data, 'deleted data')
        if (res.data.deletedCount > 0) {
            refetch() ;
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
      }
    });
  };
  const handleUpdate = (id) => {
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
      <HeadingTItle subHeading={'Wanna add more'} heading={'My items'} ></HeadingTItle>
      {/*  table  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Job</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {menu.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <th>
                  <button
                    onClick={() => handleUpdate(item._id)}
                    className="btn btn-ghost text-xl bg-slate-300 "
                  >
                    <FaEdit className="text-red-500 " />{" "}
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost text-xl "
                  >
                    <FaTrashAlt className="text-red-500" />{" "}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/*  table  */}
    </div>
  );
};

export default ManageItem;
