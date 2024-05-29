import { FaEdit, FaTrashAlt, FaUtensils } from "react-icons/fa";
import HeadingTItle from "../../../Component/HeadingTitle/HeadingTItle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useMenu from "../../../Hooks/useMenu";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ManageItem = () => {
  const axiosSecure = useAxiosSecure();
  const [menu, , refetch] = useMenu();
  const [openModal, setOpenModal] = useState();
  const [modalData, setModalData] = useState(null);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${id}`);
        console.log(res.data, "deleted data");
        if (res.data.deletedCount > 0) {
          refetch();
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
  const handleOpenModal = (item) => {
    setModalData(item);
    setOpenModal(true);
  };
  function onCloseModal() {
    setOpenModal(false);
  }
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data, "modal page");
  };

  return (
    <div>
      <HeadingTItle
        subHeading={"Wanna add more"}
        heading={"My items"}
      ></HeadingTItle>
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

                  {/* Here a modal that will be used for update data */}
                  <div>
                      <Button
                        className="text-black"
                        onClick={() => handleOpenModal(item)}
                      >
                        Toggle modal
                      </Button>
                    <Modal
                      style={{ width: "70%", margin: "auto" }}
                      show={openModal}
                      size="md"
                      onClose={onCloseModal}
                      popup
                    >
                      <Modal.Header />
                      <Modal.Body>
                        {modalData && (
                          <div className="space-y-6 p-5 ">
                            <h1 className="text-center"> Update Your Data </h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="form-control w-full my-4">
                                <label className="label">
                                  <span className="label-text">
                                    Recipe Name*
                                  </span>
                                </label>
                                <input
                                  type="text"
                                  defaultValue={modalData.name}
                                  className="input input-bordered w-full"
                                  {...register("name")}
                                />
                              </div>

                              <div className="flex gap-4">
                                <div className="form-control w-full my-4">
                                  <label className="label">
                                    <span className="label-text">
                                      Category*
                                    </span>
                                  </label>
                                  <select
                                    {...register("category")}
                                    defaultValue={modalData.category}
                                    className="select select-bordered w-full"
                                  >
                                    <option value="">Select a category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="drinks">Drinks</option>
                                  </select>
                                </div>

                                <div className="form-control w-full my-4">
                                  <label className="label">
                                    <span className="label-text">Price*</span>
                                  </label>
                                  <input
                                    type="number"
                                    defaultValue={modalData.price}
                                    className="input input-bordered w-full"
                                    {...register("price")}
                                  />
                                </div>
                              </div>

                              <div className="form-control">
                                <label className="label">
                                  <span className="label-text">
                                    Recipe Details*
                                  </span>
                                </label>
                                <textarea
                                  {...register("recipe")}
                                  className="textarea textarea-bordered"
                                  defaultValue={modalData.recipe}
                                />
                              </div>

                              <div className="form-control my-4">
                                <input
                                  {...register("image")}
                                  type="file"
                                  className="w-full max-w-xs file-input"
                                />
                              </div>

                              <div className="flex justify-center">
                                <button className="btn bg-green-600 hover:bg-green-400 justify-center">
                                  {" "}
                                  Add Item
                                  <FaUtensils className="ml-2" />{" "}
                                </button>
                              </div>
                            </form>
                          </div>
                        )}
                      </Modal.Body>
                    </Modal>
                  </div>
                  {/* Here a modal that will be used for update data */}
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
