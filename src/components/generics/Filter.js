import React, { useState } from "react";
import Select from "./Select";
import Button from "./Button";

const toFilterState = (filterObject) => {
  let filters = {};
  Object.keys(filterObject).forEach((key) => {
    filters[key] = "";
  });
  return filters;
};

function Filter(props) {
  const { filter, onFilter, reset } = props;

  const [filterState, setFilterState] = useState(toFilterState(filter));

  const handleFilterStateChange = (e) => {
    const filterKey = e.target.name;
    const filterValue = e.target.value;
    setFilterState({ ...filterState, [filterKey]: filterValue });
  };

  const handleReset = () => {
    const filterKeys = Object.keys(filterState);
    const newFilter = {};
    filterKeys.forEach((filterKey) => (newFilter[filterKey] = ""));
    setFilterState(newFilter);

    reset();
  };

  const disabledFilter = Object.values(filterState).every((value) => !value);
  return (
    <div>
      {Object.entries(filterState).map(([type, value]) => (
        <Select
          label={type}
          name={type}
          options={filter[type]}
          onChange={handleFilterStateChange}
          value={value}
        />
      ))}
      <Button onClick={() => onFilter(filterState)} disabled={disabledFilter}>
        Search
      </Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
}

export default Filter;
