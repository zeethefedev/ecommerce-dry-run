import React, { useState } from "react";
import Input from "../generics/Input";
import CardTemplate from "../generics/CardTemplate";
import { useDispatch } from "react-redux";
import { setCustomerContact } from "../../store/cart.reducer";

function ContactForm({ customer }) {
  const [contactFields, setContactFields] = useState(customer);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const newFields = contactFields.map((field) =>
      field.name === e.target.name
        ? { ...field, value: e.target.value, touched: true }
        : field
    );
    setContactFields(newFields);
    dispatch(setCustomerContact(newFields));
  };

  return (
    <CardTemplate cardClass="max-w-none">
      <h3 className="text-left">Payment</h3>
      <form>
        {contactFields.map((field) => (
          <Input
            label={field.name}
            name={field.name}
            value={field.value}
            type={field.name === "email" ? "email" : "text"}
            onChange={handleInputChange}
            error={!field.value && field.touched}
          />
        ))}
      </form>
    </CardTemplate>
  );
}

export default ContactForm;
