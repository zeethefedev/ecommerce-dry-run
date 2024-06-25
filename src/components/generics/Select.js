import React from "react";

function Select(props) {
  const { options, label, onChange } = props;

  return (
    <>
      <label className="flex items-center w-full capitalize text-left">
        {label}{" "}
        <select name="select" onChange={onChange}>
          {options.map((option) => (
            <option value={option.name}>{option.displayName}</option>
          ))}
        </select>
      </label>
    </>
  );
}

export default Select;
