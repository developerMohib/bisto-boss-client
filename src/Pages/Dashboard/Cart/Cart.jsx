import useCartData from "../../../Hooks/useCartData";

const Cart = () => {
  const [cart] = useCartData() ;
  console.log(cart, 'from cart page')
  return (
    <div>
        <h1> Wanna Add More ?? </h1>
      <div className="flex bg-slate-300 p-3 justify-around" >
        <h1 className="text-2xl " > Total item : {cart.length} </h1>
        <h1 className="text-2xl " > Total Price : {cart.length} </h1>
        <h1 className="text-2xl " > Pay : {cart.length} </h1>
      </div>
    </div>
  );
};

export default Cart;
