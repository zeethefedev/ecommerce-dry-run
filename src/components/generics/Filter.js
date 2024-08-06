import React, { useState } from "react";
import Select from "./Select";
import * as DATA from "../../utils/testdata";
import Button from "./Button";

const toOptions = (optionsArray) => {
  return optionsArray.map((option) => ({
    name: option.toLowerCase(),
    displayName: option,
  }));
};

const toFilterObject = (filterArray) => {
  let filters = {};
  filterArray.forEach((key) => {
    filters[key] = "";
  });

  return filters;
};

function Filter(props) {
  const { filter, onFilter } = props;

  const [filterState, setFilterState] = useState(toFilterObject(filter));

  const handleFilterStateChange = (e) => {
    const filterKey = e.target.name;
    const filterValue = e.target.value;
    setFilterState({ ...filterState, [filterKey]: filterValue });
  };

  return (
    <div>
      {Object.keys(filterState).map((type) => (
        <Select
          label={type}
          name={type}
          options={toOptions(DATA[type.toUpperCase()])}
          onChange={handleFilterStateChange}
        />
      ))}
      <Button onClick={() => onFilter(filterState)}>Search</Button>
    </div>
  );
}

export default Filter;
