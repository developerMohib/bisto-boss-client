import HeadingTItle from "../../../Component/HeadingTitle/HeadingTItle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("");

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
