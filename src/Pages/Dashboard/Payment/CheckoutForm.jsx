import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCartData from "../../../Hooks/useCartData";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [errorMessage, setErrorMessage] = useState(" ");
  const [clientSecret, setClientSecret] = useState('')
  const [cart] = useCartData();
  const price = cart.reduce((total, item) => total + item.price, 0);
  console.log("price ", price);

  //
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data);
      setClientSecret(res.data.clientSecret)
    });
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    if (elements == null) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setErrorMessage(error.message);
      console.log("what error", error);
      toast.error(error.message);
    } else {
      // console.log("payment method", paymentMethod);
      toast.success("your payment successfully");
      setErrorMessage(" ");
    }
  };

  return (
    <div>
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
        <button
          className="btn btn-outline"
          type="submit"
          disabled={!stripe || !elements || !clientSecret}
        >
          Pay
        </button>
        {/* Show error message to your customers */}
        <p> {errorMessage} </p>
      </form>
    </div>
  );
};

export default CheckoutForm;
