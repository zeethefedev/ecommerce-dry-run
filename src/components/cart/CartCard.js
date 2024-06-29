import React from "react";
import SVGIcon from "../generics/SVGIcon";
import Button from "../generics/Button";

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
        <Button onClick={onDecrease} variant="tetriary">
          <SVGIcon icon="minus" />
        </Button>
        <div>{product.quantity}</div>
        <Button onClick={onIncrease} variant="tetriary">
          <SVGIcon icon="plus" />
        </Button>
        {/* <Button onClick={onRemove}>Remove</Button> */}
      </div>
      <div>{product.price}</div>
    </div>
  );
}

export default CartCard;
