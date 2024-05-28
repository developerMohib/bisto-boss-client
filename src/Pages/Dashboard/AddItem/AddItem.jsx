import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import HeadingTItle from "../../../Component/HeadingTitle/HeadingTItle";

const AddItem = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
              {...register("name", { required: "Recipe name is required", maxLength: { value: 20, message: "Max length is 20 characters" } })}
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
                placeholder="Recipe Price"
                className="input input-bordered w-full"
                {...register("price", { required: "Price is required", min: { value: 18, message: "Min price is 18" }, max: { value: 99, message: "Max price is 99" } })}
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

          <div className="btn flex items-center justify-center">
            <input type="submit" value="Add Item" className="btn-primary" />
            <FaUtensils className="ml-2" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
