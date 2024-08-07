import React, { useState } from "react";

const toOptionName = (option) => {
  return option.toLowerCase().replace(/ /g, "-");
};

function Select(props) {
  const {
    options,
    value,
    label,
    onChange,
    name = "select",
    error,
    errorMessage,
  } = props;
  const [labelFocused, setLabelFocus] = useState(false);

  const handleCloseLableFocus = (e) => {
    if (!e.target.value) {
      setLabelFocus(false);
    }
  };

  return (
    <div className="my-4 max-w-64 flex flex-col">
      <div className="input-container w-full flex rounded">
        <select
          className="input-field"
          name={name}
          onFocus={() => setLabelFocus(true)}
          onBlur={handleCloseLableFocus}
          onChange={onChange}
          value={value}
        >
          <>
            <option value=""></option>
            {options.map((option) => (
              <option value={toOptionName(option)}>{option}</option>
            ))}
          </>
        </select>
        <label
          className={`input-label capitalize ${labelFocused ? "focused" : ""}`}
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

export default Select;
