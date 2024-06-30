import React, { useState } from "react";

function Input(props) {
  const {
    type = "text",
    value,
    label,
    error,
    errorMessage = "Please fill in this form",
  } = props;

  const [labelFocused, setLabelFocus] = useState(false);
  return (
    <div className="m-4 max-w-64 flex flex-col">
      <div className="input-container w-full flex rounded">
        <input
          id="custom-input"
          className="input-field"
          type={type}
          onFocus={() => setLabelFocus(true)}
          onBlur={() => setLabelFocus(false)}
          {...props}
        />
        <label
          className={`input-label capitalize ${
            labelFocused || value ? "focused" : ""
          }`}
          for="custom-input"
        >
          {label}
        </label>
      </div>
      {error && (
        <div className="text-right text-color-blue">{errorMessage}</div>
      )}
    </div>
  );
}

export default Input;
