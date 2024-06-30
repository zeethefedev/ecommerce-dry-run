import React from "react";

function OrderSummary({ customer, products }) {
  const totalPrice = products
    .filter((prod) => prod.chosen.roast)
    .map((prod) => prod.chosen.price * prod.chosen.quantity)
    .reduce((total, currentValue) => total + currentValue, 0);

  return (
    <div className="h-full">
      <div>Total: {totalPrice}</div>
      <div>Promo code: </div>
      <div>Shipping: </div>
      <div>Subtotal: </div>
    </div>
  );
}

export default OrderSummary;
