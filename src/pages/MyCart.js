import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/cart/CartCard";
import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "../store/cart.reducer";
import ContactForm from "../components/cart/ContactForm";
import OrderSummary from "../components/cart/OrderSummary";

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

  const [showContactForm, setShowContactForm] = useState(false);
  const handleShowContactForm = () => {
    setShowContactForm(!showContactForm);
    // setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        {showContactForm ? (
          <ContactForm />
        ) : (
          <>
            {productsInCart.map((prod) => (
              <CartCard
                product={prod}
                onIncrease={() => handleIncrease(prod)}
                onDecrease={() => handleDecrease(prod)}
                onRemove={() => handleRemove(prod)}
              />
            ))}
          </>
        )}
      </div>
      <div>
        <OrderSummary products={productsInCart} />
        <button onClick={handleShowContactForm}>Check out</button>
      </div>
    </div>
  );
}

export default MyCart;
