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
  const { filterTypes = ["beans", "origins", "roast"], onFilter } = props;
  const handleFilter = (e) => {};

  return (
    <div>
      {filterTypes.map((type) => (
        <Select
          label={type}
          options={toOptions(DATA[type.toUpperCase()])}
          onChange={handleFilter}
        />
      ))}
      <button onClick={onFilter}>Search</button>
    </div>
  );
}

export default Filter;
