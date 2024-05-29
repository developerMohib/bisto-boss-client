import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import HeadingTItle from "../../../Component/HeadingTitle/HeadingTItle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

// imge hosting
const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY ;
const imageAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const AddItem = () => {
  const axiosPublic = useAxiosPublic() ;
  const axiosSecure = useAxiosSecure() ;
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const imageFile = {image : data.image[0] }
    // console.log(imageFile,'log image')
    const res = await axiosPublic.post(imageAPI, imageFile, {
      headers: { "content-Type": "multipart/form-data" }
    }) 
    // console.log(res.data)
    if(res.data.success){
      const menuItem = {
        name : data.name,
        recipe : data.recipe,
        price : parseFloat(data.price),
        category : data.category,
        image : res.data.data.display_url 
      }
      // send data to beck end to database
      const menuRes = await axiosSecure.post("/menu",menuItem)
      console.log(menuRes,'menu pass axios')
      if(menuRes.data.insertedId){
        toast.success('Your Item has been added successfully')
      }
    }
  };

  return (
    <div>
      <HeadingTItle subHeading={"What's New"} heading={"Add Item"}></HeadingTItle>
      <div className="bg-slate-300 p-3">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
              {...register("name", { required: "Recipe name is required"})}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div className="flex gap-4">
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category", { required: "Category is required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select a category</option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
              {errors.category && <p className="text-red-500">{errors.category.message}</p>}
            </div>

            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Recipe Price "
                className="input input-bordered w-full"
                {...register("price", { required: "Price is required", message: "price is required"})}
              />
              {errors.price && <p className="text-red-500">{errors.price.message}</p>}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register('recipe', { required: "Recipe details are required" })}
              className="textarea textarea-bordered"
              placeholder="Recipe Details"
            />
            {errors.recipe && <p className="text-red-500">{errors.recipe.message}</p>}
          </div>

          <div className="form-control my-4">
            <input
              {...register('image', { required: "Image is required" })}
              type="file"
              className="w-full max-w-xs file-input"
            />
            {errors.image && <p className="text-red-500">{errors.image.message}</p>}
          </div>

          <div className="flex justify-center">
            <button  className="btn bg-green-600 hover:bg-green-400 justify-center"> Add Item <FaUtensils className="ml-2" /> </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
