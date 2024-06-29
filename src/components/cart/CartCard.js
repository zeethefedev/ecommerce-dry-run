import React from "react";
import SVGIcon from "../generics/SVGIcon";
import Button from "../generics/Button";
import CardTemplate from "../generics/CardTemplate";

function CartCard({ product, onIncrease, onDecrease, onRemove }) {
  return (
    <CardTemplate cardClass="max-w-none justify-between" direction="row">
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
        <Button
          onClick={onDecrease}
          variant="tetriary"
          className="text-[#ebebeb]"
        >
          <SVGIcon icon="minus" />
        </Button>
        <div>{product.quantity}</div>
        <Button
          onClick={onIncrease}
          variant="tetriary"
          className="text-[#ebebeb]"
        >
          <SVGIcon icon="plus" />
        </Button>
        {/* <Button onClick={onRemove}>Remove</Button> */}
      </div>
      <div>VDN {product.price}</div>
    </CardTemplate>
  );
}

export default CartCard;
