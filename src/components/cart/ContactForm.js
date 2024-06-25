import React from "react";
import Input from "../generics/Input";

function ContactForm() {
  return (
    <div>
      <Input label="Name" placeholder="Enter your name here" />
      <Input label="Address" />
      <Input label="Email" type="email" />
    </div>
  );
}

export default ContactForm;
