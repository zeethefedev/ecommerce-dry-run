import React from "react";
import SVGIcon from "../generics/SVGIcon";

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
        <button onClick={onDecrease}>
          <SVGIcon icon="minus" />
        </button>
        <div>{product.quantity}</div>
        <button onClick={onIncrease}>
          <SVGIcon icon="plus" />
        </button>
        {/* <button onClick={onRemove}>Remove</button> */}
      </div>
      <div>{product.price}</div>
    </div>
  );
}

export default CartCard;
