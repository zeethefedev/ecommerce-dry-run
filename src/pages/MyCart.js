import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/cart/CartCard";
import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "../store/cart.reducer";

function MyCart() {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.products);
  // const productsInCart = products.filter((prod) => prod.quantity > 0);

  const handleIncrease = (product) => {
    dispatch(increaseProduct(product));
  };
  const handleDecrease = (product) => {
    dispatch(decreaseProduct(product));
  };
  const handleRemove = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <div>
      {productsInCart.map((prod) => (
        <CartCard
          product={prod}
          onIncrease={() => handleIncrease(prod)}
          onDecrease={() => handleDecrease(prod)}
          onRemove={() => handleRemove(prod)}
        />
      ))}
    </div>
  );
}

export default MyCart;
