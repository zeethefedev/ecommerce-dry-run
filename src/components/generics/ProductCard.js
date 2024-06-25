import React from "react";

function ProductCard({ product, handleAddToCart }) {
  return (
    <div className="flex flex-col border-2 border-black gap-2">
      {/* image */}
      <div>
        <div>{product.displayName}</div>
        <div>{product.price}</div>
        <div>{product.roast}</div>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
