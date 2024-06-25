import React from "react";

function Search(props) {
  const { value, label, disabled, placeholder, onChange } = props;
  return (
    <div className="w-full flex flex-col items-end">
      <label className="flex items-center w-full capitalize text-left">
        {label}{" "}
        <input
          type="text"
          name={label}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Search;
