import React, { useState } from "react";
import { PRODUCTS } from "../../utils/testdata";
import Filter from "../generics/Filter";
import ProductCard from "./ProductCard";
import {
  checkArrayIncludeText,
  checkIncludeText,
  getFilterFromProducts,
} from "../../utils/method.utils";

const filters = getFilterFromProducts(PRODUCTS);

function ProductList({ products = PRODUCTS }) {
  const [productsState, setProductsState] = useState(products);

  const handleFilter = (filter) => {
    const filteredProducts = products.filter((prod) =>
      Object.keys(filters).every((key) => {
        const searchText = filter[key];
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

  const resetFilter = () => {
    setProductsState(products);
  };

  return (
    <div>
      <Filter filter={filters} onFilter={handleFilter} reset={resetFilter} />
      <div className="flex justify-center gap-4 flex-wrap">
        {productsState.map((prod) => (
          <ProductCard item={prod} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
