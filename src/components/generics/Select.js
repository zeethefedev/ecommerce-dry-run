import React from "react";

function Select(props) {
  const { options, label, onChange, name = "select" } = props;

  return (
    <>
      <label className="flex items-center w-full capitalize text-left">
        {label}{" "}
        <select name={name} onChange={onChange}>
          <>
            <option value=""></option>
            {options.map((option) => (
              <option value={option.name}>{option.displayName}</option>
            ))}
          </>
        </select>
      </label>
    </>
  );
}

export default Select;
