// import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import useCartData from "../../../Hooks/useCartData";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCartData();
  const totalPrice = cart?.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  // console.log(cart, 'cart page')
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
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          refetch() ;
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h1> Wanna Add More ?? </h1>
      <div className="flex bg-slate-300 p-3 justify-around">
        <h1 className="text-2xl "> Total item : {cart.length} </h1>
        <h1 className="text-2xl "> Total Price : $ {totalPrice} </h1>
        <h1 className="text-2xl "> Pay : {cart.length} </h1>
      </div>

      {/*  table  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, idx) => (
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
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost text-2xl "
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

export default Cart;
