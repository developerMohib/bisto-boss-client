import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCartData from "../../../Hooks/useCartData";
import useAuth from "../../../Hooks/useAuth";

const CheckoutForm = () => {
  const {user} = useAuth();
  const stripe = useStripe();
  const [cart] = useCartData();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [errorMessage, setErrorMessage] = useState(" ");
  const [clientSecret, setClientSecret] = useState("");
  const [transId, setTransId] = useState('')
  const price = cart.reduce((total, item) => total + item.price, 0);

  //
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) {
      return;
    }
    if (elements === null) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setErrorMessage(error.message);
      console.log("what error", error);
    } else {
      // console.log("payment method", paymentMethod);
      toast.success("your payment successfully");
      setErrorMessage(" ");
    }

    // payment intent 
    try{
      const {paymentIntent, error: errorOfPayment } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || 'anynomous',
              email : user?.email || 'anynomous' ,
            },
          },
        },
      );
      if(errorOfPayment){
        console.log(errorOfPayment,'error paici')
      }
      else{
        // console.log('payment', paymentIntent)
        if(paymentIntent?.status === "succeeded"){
          toast.success(" Your Payment successfully")
          setTransId(paymentIntent?.id) ;
          const payment = {
            email : user.email,
            price : price,
            tarnsitionId: paymentIntent.id,
            cartId : cart.map(item => item._id) ,
            menuId: cart.map(item => item.itemId),
            date : new Date() ,
            status : 'pending'
          }
          const res = await axiosSecure.post('/confirmd-order', payment)
          console.log(res.data)
        }
      }

    }catch(err){
      console.error('An error occurred during payment processing:', err);
    }
  };

  return (
    <div>
      <h1 className="text-center my-2" > I have to pay {price} </h1>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center my-10">
          <button
            className="btn btn-outline"
            type="submit"
            disabled={!stripe || !elements || !clientSecret }
          >
            Payment
          </button>
          {
            transId && 
            <p> Your Transition id {transId} </p>
          }
        </div>
        {/* Show error message to your customers */}
        <p> {errorMessage} </p>
      </form>
    </div>
  );
};

export default CheckoutForm;
