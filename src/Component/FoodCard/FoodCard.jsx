
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
              <p className="bg-slate-900 text-white absolute p-1 rounded-md right-3 top-1" > ${price}</p>
            <div className="card-body">
              <h2 className="card-title"> {name} </h2>
              <p>{recipe}</p>
              <div className="card-actions justify-center">
                <button className="btn border-0 border-b-2 border-slate-500 rounded-lg">Add to Cart</button>
              </div>
            </div>
          </div>
    );
};

export default FoodCard;