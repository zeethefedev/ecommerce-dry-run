import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/cart/CartCard";
import ContactForm from "../components/cart/ContactForm";
import OrderSummary from "../components/cart/OrderSummary";
import Button from "../components/generics/Button";

function MyCart() {
  const products = useSelector((state) => state.cart.products);
  const productsInCart = products.filter((prod) => prod.chosen.quantity > 0);

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
              <CartCard product={prod} />
            ))}
          </>
        )}
      </div>
      <div className="card-light flex flex-col items-center justify-between gap-2 px-5 py-6 h-[60vh]">
        <h2>Summary</h2>
        <OrderSummary products={productsInCart} />
        <Button
          variant="primary"
          onClick={handleShowContactForm}
          className="flex items-center justify-center"
        >
          Check out
        </Button>
      </div>
    </div>
  );
}

export default MyCart;
