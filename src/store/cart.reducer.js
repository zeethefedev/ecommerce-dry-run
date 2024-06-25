import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../utils/testdata";
import { updateQuantity } from "../utils/method.reducer";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: PRODUCTS.map((prod) => ({ ...prod, quantity: 0 })),
    productsInCart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const current = action.payload;
      const newProducts = updateQuantity(state.products, current, "increase");
      state.products = newProducts;
      console.log(state.products);
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
