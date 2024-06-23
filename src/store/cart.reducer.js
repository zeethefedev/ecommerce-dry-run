import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    setCart: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;
