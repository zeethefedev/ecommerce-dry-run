import { createSlice } from "@reduxjs/toolkit";
import { CUSTOMER, PRODUCTS } from "../utils/testdata";
import { saveProductsToStorage, updateQuantity } from "../utils/method.reducer";
import { getFromStorage } from "../utils/method.utils";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: PRODUCTS.map((prod) => ({
      ...prod,
      chosen: {},
    })),
    customer: CUSTOMER.map((key) => ({
      name: key,
      value: "",
      touched: false,
    })),
    productsInCart: [],
  },
  reducers: {
    setCart: (state) => {
      const initProducts = getFromStorage("PRODUCTS");
      if (initProducts) state.products = initProducts;
    },
    addToCart: (state, action) => {
      const current = action.payload;
      const chosen = current.chosen;
      const newProducts = state.products.map((prod) =>
        prod.id === current.id ? { ...prod, chosen } : prod
      );
      state.products = newProducts;
      saveProductsToStorage(state.products);
    },
    increaseProduct: (state, action) => {
      const current = action.payload;
      const newProducts = updateQuantity(state.products, current, "increase");
      state.products = newProducts;
      saveProductsToStorage(state.products);
    },
    decreaseProduct: (state, action) => {
      const current = action.payload;
      const newProducts = updateQuantity(state.products, current, "decrease");
      state.products = newProducts;
      saveProductsToStorage(state.products);
    },
    removeProduct: (state, action) => {
      const current = action.payload;
      const newProducts = updateQuantity(state.products, current, "remove");
      state.products = newProducts;
      saveProductsToStorage(state.products);
    },
    setCustomerContact: (state, action) => {
      const customer = action.payload;
      state.customer = customer;
    },
  },
});

export const {
  setCart,
  addToCart,
  increaseProduct,
  decreaseProduct,
  removeProduct,
  setCustomerContact,
} = cartSlice.actions;

export default cartSlice.reducer;
