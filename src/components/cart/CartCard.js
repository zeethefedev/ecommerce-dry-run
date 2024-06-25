import React from "react";

function CartCard({ product, onIncrease, onDecrease, onRemove }) {
  return (
    <div>
      {/* image */}
      <div>
        {/* <div>{product.displayName}</div> */}
        <div>{product.price}</div>
        <div>{product.roast}</div>
        <div>{product.name}</div>
        <div>{product.quantity}</div>
      </div>
      <div>
        <button onClick={onIncrease}>Increase</button>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
}

export default CartCard;
