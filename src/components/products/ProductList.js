import React, { useState } from "react";
import { PRODUCTS } from "../../utils/testdata";
import Filter from "../generics/Filter";
import ProductCard from "./ProductCard";
import {
  checkArrayIncludeText,
  checkIncludeText,
} from "../../utils/method.utils";

const FILTERS = ["beans", "roast"];

function ProductList({ products = PRODUCTS }) {
  const [productsState, setProductsState] = useState(products);

  const handleFilter = (filter) => {
    const filteredProducts = products.filter((prod) =>
      ["name", "roast"].every((key) => {
        const searchText = filter[key === "name" ? "beans" : key];
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
      <Filter filter={FILTERS} onFilter={handleFilter} />
      <div className="flex justify-center gap-4 flex-wrap">
        {productsState.map((prod) => (
          <ProductCard item={prod} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
