import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../utils/testdata";
import { updateQuantity } from "../utils/method.reducer";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: PRODUCTS.map((prod) => ({
      ...prod,
      chosen: {},
    })),
    productsInCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const current = action.payload;
      const chosen = current.chosen;
      const newProducts = state.products.map((prod) =>
        prod.id === current.id ? { ...prod, chosen } : prod
      );
      state.products = newProducts;
      // state.productsInCart = newProducts;
    },
    increaseProduct: (state, action) => {
      const current = action.payload;
      const newProducts = updateQuantity(state.products, current, "increase");
      state.products = newProducts;
    },
    decreaseProduct: (state, action) => {
      const current = action.payload;
      const newProducts = updateQuantity(state.products, current, "decrease");
      state.products = newProducts;
    },
    removeProduct: (state, action) => {
      const current = action.payload;
      const newProducts = updateQuantity(state.products, current, "remove");
      state.products = newProducts;
    },
  },
});

export const { addToCart, increaseProduct, decreaseProduct, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
