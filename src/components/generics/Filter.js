import React from "react";
import Select from "./Select";
import * as DATA from "../../utils/testdata";
import Button from "./Button";

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
      <Button onClick={onFilter}>Search</Button>
    </div>
  );
}

export default Filter;
