import React, { useState } from "react";

function Select(props) {
  const { options, label, onChange, name = "select" } = props;
  const [labelFocused, setLabelFocus] = useState(false);

  const handleCloseLableFocus = (e) => {
    if (!e.target.value) {
      setLabelFocus(false);
    }
  };

  return (
    <div className="m-4 max-w-64 flex flex-col">
      <div className="input-container w-full flex rounded">
        <select
          className="input-field"
          name={name}
          onFocus={() => setLabelFocus(true)}
          onBlur={handleCloseLableFocus}
          onChange={onChange}
        >
          <>
            <option value=""></option>
            {options.map((option) => (
              <option value={option.name}>{option.displayName}</option>
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
    </div>
  );
}

export default Select;
