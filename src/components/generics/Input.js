import React from "react";

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
    onChange,
  } = props;
  return (
    <div className="w-full flex flex-col items-end">
      <label className="flex items-center w-full justify-between capitalize text-left">
        {label}
        {": "}
        <div className="input-wrapper w-full max-w-64 flex justify-end rounded border-2 border-solid">
          <input
            type={type}
            required={required}
            name={name}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      </label>
      {error && <div className="text-right text-color-blue">{error}</div>}
    </div>
  );
}

export default Input;
