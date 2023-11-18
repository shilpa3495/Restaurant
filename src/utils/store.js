import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import restaurantSlice from "./restaurantSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    restaurants:restaurantSlice
  },
});

export default store;