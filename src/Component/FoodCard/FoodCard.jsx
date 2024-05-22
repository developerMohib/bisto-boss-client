
const FoodCard = ({item}) => {
    const {name, image,recipe,price} = item ;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={image}
                alt={name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> {name} </h2>
              <p>{recipe}</p>
              <p> <span className="text-orange-500 font-bold ">Price :</span> {price}</p>
              <div className="card-actions justify-center">
                <button className="btn bg-slate-800 border-none text-white">Add to Cart</button>
              </div>
            </div>
          </div>
    );
};

export default FoodCard;