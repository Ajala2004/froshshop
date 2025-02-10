import React, { useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("your-publishable-key-here");

const Checkout = ({ amount, userId }) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/payment/create", {
        amount,
        userId,
      });

      const stripe = await stripePromise;
      const { error } = await stripe.confirmCardPayment(data.clientSecret);

      if (error) {
        alert("Payment failed: " + error.message);
      } else {
        await axios.post("/api/payment/update-status", {
          paymentId: data.paymentId,
          status: "successful",
        });
        alert("Payment successful!");
      }
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <button onClick={handleCheckout} disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </div>
  );
};

export default Checkout;