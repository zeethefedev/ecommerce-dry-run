import React, { useState } from "react";

function Input(props) {
  const {
    type = "text",
    value,
    required = false,
    name,
    label,
    disabled,
    placeholder,
    error,
    errorMessage = "Please fill in this form",
    onChange,
  } = props;

  const [labelFocused, setLabelFocus] = useState(false);
  return (
    <div className="m-4 max-w-64 flex flex-col">
      <div className="input-container w-full flex rounded">
        <input
          id="custom-input"
          className="input-field"
          type={type}
          required={required}
          name={name}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onFocus={() => setLabelFocus(true)}
          onBlur={() => setLabelFocus(false)}
          onChange={onChange}
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
