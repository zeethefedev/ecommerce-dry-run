import React, { useState } from "react";
import { PRODUCTS } from "../../utils/testdata";
// import Search from "../generics/Search";
import Filter from "../generics/Filter";
import ProductCard from "./ProductCard";
import {
  checkArrayIncludeText,
  checkIncludeText,
} from "../../utils/method.utils";

const FILTERS = ["beans", "roast"];

const toObject = (filterArray) => {
  let filters = {};
  filterArray.forEach((key) => {
    filters[key] = "";
  });

  return filters;
};

function ProductList({ products = PRODUCTS }) {
  const [productsState, setProductsState] = useState(products);
  const [filterState, setFilterState] = useState(toObject(FILTERS));

  // const handleSearch = (e) => {
  //   const searchText = e.target.value;
  //   const filteredProducts = products.filter((prod) =>
  //     prod.name.toLowerCase().includes(searchText)
  //   );
  //   if (searchText) {
  //     setProductsState(filteredProducts);
  //   } else setProductsState(products);
  // };

  const handleFilterStateChange = (e) => {
    const filterKey = e.target.name;
    const filterValue = e.target.value;
    setFilterState({ ...filterState, [filterKey]: filterValue });
  };

  const handleFilter = () => {
    const filteredProducts = products.filter((prod) =>
      ["name", "roast"].every((key) => {
        const searchText = filterState[key === "name" ? "beans" : key];
        return key === "name"
          ? checkIncludeText(prod[key], searchText)
          : checkArrayIncludeText(
              prod.variants.map((variant) => variant.roast),
              searchText
            );
      })
    );
    setProductsState(filteredProducts);
  };

  return (
    <div>
      {/* <Search label="search" onChange={handleSearch} /> */}
      <Filter
        filter={filterState}
        onFilterStateChange={handleFilterStateChange}
        onFilter={handleFilter}
      />
      <div className="flex justify-center gap-4 flex-wrap">
        {productsState.map((prod) => (
          <ProductCard item={prod} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
