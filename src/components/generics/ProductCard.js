import React, { useState } from "react";
import PopUp from "./PopUp";

function ProductPopup({ product, onCloseButtonClick, onClickAddToCart }) {
  return (
    <div>
      <div>{product.displayName}</div>
      <button onClick={onCloseButtonClick}>Close</button>
      <button onClick={onClickAddToCart}>Add to cart</button>
    </div>
  );
}

function ProductCard({ product, onClickAddToCart }) {
  const [openProductPopup, setOpenProductPopup] = useState(false);
  const [currentProduct, setCurrentProduct] = useState();
  const handleOpenProductPopup = () => {
    setOpenProductPopup(true);
    setCurrentProduct(product);
  };

  const handleCloseProductPopup = () => {
    setOpenProductPopup(false);
  };

  return (
    <>
      <div className="flex flex-col border-2 border-black gap-2">
        {/* image */}
        <div>
          {/* <div>{product.displayName}</div> */}
          <img src={product.thumbnail} alt="" />
          <div>{product.price}</div>
          <div>{product.roast}</div>
          <div>{product.name}</div>
        </div>
        <button onClick={onClickAddToCart}>Add to cart</button>
        <button onClick={handleOpenProductPopup}>Show Product Details</button>
      </div>
      <PopUp open={openProductPopup}>
        <ProductPopup
          product={currentProduct}
          onCloseButtonClick={handleCloseProductPopup}
          onClickAddToCart={onClickAddToCart}
        />
      </PopUp>
    </>
  );
}

export default ProductCard;
