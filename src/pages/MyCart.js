import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartCard from "../components/cart/CartCard";
import ContactForm from "../components/cart/ContactForm";
import OrderSummary from "../components/cart/OrderSummary";
import Button from "../components/generics/Button";
import { setCustomerContact } from "../store/cart.reducer";

function MyCart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const customer = useSelector((state) => state.cart.customer);
  const productsInCart = products.filter((prod) => prod.chosen.quantity > 0);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleShowContactForm = () => {
    // setShowContactForm(!showContactForm);
    setShowContactForm(true);
  };

  const handleCloseContactForm = () => {
    setShowContactForm(false);
  };

  const handlePlaceOrder = () => {
    const newFields = customer.map((field) => ({ ...field, touched: true }));
    // setContactFields(newFields);
    dispatch(setCustomerContact(newFields));
    const validForm = validateFields();
    if (validForm) {
      console.log("order placed");
    } else {
      console.log("try again");
    }
  };

  const validateFields = () => {
    const valid = customer.every((field) => field.value && field.touched);
    return valid;
  };

  const handleButtonClick = () => {
    if (showContactForm) {
      handlePlaceOrder();
    } else {
      handleShowContactForm();
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2">
        {showContactForm ? (
          <ContactForm customer={customer} />
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
          onClick={handleButtonClick}
          className="flex items-center justify-center"
        >
          {showContactForm ? "Place order" : "Check out"}
        </Button>
      </div>
    </div>
  );
}

export default MyCart;
