import React from "react";

function CartCard({ product, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex items-center">
      <img
        className="object-cover aspect-square max-w-16"
        src={product.thumbnail}
        alt=""
      />
      <div>
        {/* <div>{product.displayName}</div> */}
        <div>{product.name}</div>
        <div>{product.roast}</div>
      </div>
      <div className="flex items-center">
        <button onClick={onDecrease}>Decrease</button>
        <div>{product.quantity}</div>
        <button onClick={onIncrease}>Increase</button>
        {/* <button onClick={onRemove}>Remove</button> */}
      </div>
      <div>{product.price}</div>
    </div>
  );
}

export default CartCard;
