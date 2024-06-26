import React from "react";

function OrderSummary({ customer, products }) {
  const totalPrice = products
    .map((prod) => prod.price * prod.quantity)
    .reduce((total, currentValue) => total + currentValue, 0);

  return (
    <div>
      <div>Total: {totalPrice}</div>
      <div>Promo code: </div>
      <div>Shipping: </div>
      <div>Subtotal: </div>
    </div>
  );
}

export default OrderSummary;
