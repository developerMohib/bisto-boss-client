import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCartData from "../../Hooks/useCartData";


const FoodCard = ({ item }) => {
  const { name, image, recipe, price, _id} = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure() ;
  const [,refetch] = useCartData()  ;
  

  const handleAddCart = () => {

    const cartItem = {
      itemId : _id ,
      email : user.email ,
      name, image, price
    }
    // axios.post('https://bisto-boss-server-phi.vercel.app/carts', cartItem)
    axiosSecure.post('/carts', cartItem)
    .then(res => {
      if(res.data.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${name} added to your cart `,
          showConfirmButton: false,
          timer: 1500
        });
      }
      refetch()
    })
    .catch(err => {
      console.log(err)
    })

    if (user && user.email) {
      // todo : send data to database
    } else {
      // sweet alert
      Swal.fire({
        title: "You are not logged in",
        text: "Do you want to log in!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="bg-slate-900 text-white absolute p-1 rounded-md md:right-3 right-8 top-1">
        {" "}
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title"> {name} </h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handleAddCart}
            className="btn border-0 border-b-2 border-slate-500 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
