import HeadingTItle from "../../../Component/HeadingTitle/HeadingTItle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAYMENT_PK);

const Payment = () => {
  return (
    <div>
      <HeadingTItle
        heading={"Payment"}
        subHeading={"Pay to eat"}
      ></HeadingTItle>

      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default Payment;
