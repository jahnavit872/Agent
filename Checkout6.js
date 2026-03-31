import React from "react";
import { calculateDiscount } from "./calculateDiscount";

export default function Checkout({ price, isPremiumUser }) {
  const discount = calculateDiscount(price, isPremiumUser);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Discount: {discount}</p>
    </div>
  );
}
