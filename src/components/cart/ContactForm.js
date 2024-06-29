import React, { useState } from "react";
import Input from "../generics/Input";
import Button from "../generics/Button";

const FIELDS = ["name", "address", "email", "note"];
const toObject = (fieldArray) => {
  const fieldsObject = fieldArray.map((key) => ({
    name: key,
    value: "",
    touched: false,
  }));

  return fieldsObject;
};

function ContactForm({ customer }) {
  const [contactFields, setContactFields] = useState(toObject(FIELDS));
  const handleInputChange = (e) => {
    const newFields = contactFields.map((field) =>
      field.name === e.target.name
        ? { ...field, value: e.target.value, touched: true }
        : field
    );
    setContactFields(newFields);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const newFields = contactFields.map((field) => ({
      ...field,
      touched: true,
    }));
    setContactFields(newFields);
    const validForm = validateFields();
    if (validForm) {
      console.log("order placed");
    } else {
      console.log("try again");
    }
  };

  const validateFields = () => {
    const valid = contactFields.every((field) => field.value && field.touched);
    return valid;
  };

  return (
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
      <Button variant="primary" onClick={handlePlaceOrder}>
        Place Order
      </Button>
    </form>
  );
}

export default ContactForm;
