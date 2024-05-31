import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import toast from "react-hot-toast";
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(" ");

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
      toast.error(error.message)
    } else {
      console.log("payment method", paymentMethod);
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
          disabled={!stripe || !elements}
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
