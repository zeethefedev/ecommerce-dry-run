import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart.reducer";
import dataReducer from "./data.reducer";

export default configureStore({
  reducer: { cart: cartReducer, data: dataReducer },
});
