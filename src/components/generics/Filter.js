import React from "react";
import Select from "./Select";
import * as DATA from "../../utils/testdata";

const toOptions = (optionsArray) => {
  return optionsArray.map((option) => ({
    name: option.toLowerCase(),
    displayName: option,
  }));
};

function Filter(props) {
  const { filter, onFilterStateChange, onFilter } = props;

  return (
    <div>
      {Object.keys(filter).map((type) => (
        <Select
          label={type}
          name={type}
          options={toOptions(DATA[type.toUpperCase()])}
          onChange={onFilterStateChange}
        />
      ))}
      <button onClick={onFilter}>Search</button>
    </div>
  );
}

export default Filter;
