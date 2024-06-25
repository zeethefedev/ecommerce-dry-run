import React, { useState } from "react";
import { PRODUCTS } from "../../utils/testdata";
import ProductCard from "../generics/ProductCard";
import Search from "../generics/Search";
import Filter from "../generics/Filter";

const FILTERS = ["beans", "origins", "roast"];

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

  const handleSearch = (e) => {
    const searchText = e.target.value;
    const filteredProducts = products.filter((prod) =>
      prod.displayName.toLowerCase().includes(searchText)
    );
    if (searchText) {
      setProductsState(filteredProducts);
    } else setProductsState(products);
  };

  const handleFilter = () => {};

  return (
    <div>
      <Search label="search" onChange={handleSearch} />
      <Filter filter={filterState} onFilter={handleFilter} />
      <div className="flex justify-center gap-4">
        {productsState.map((prod) => (
          <ProductCard product={prod} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
