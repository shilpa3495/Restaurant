import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../constant";

export const getRestaurant = createAsyncThunk(
  "getRestaurant",
  async (cityId) => {
    const token = JSON.parse(localStorage.getItem("token"));
    try {
      const response = await axios.get(
        `${baseUrl}/m/restaurant?city_id=${cityId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  }
);

export const restaurants = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(getRestaurant.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getRestaurant.fulfilled, (state, action) => {
      state.loading = false;
      state.restaurants = action.payload;
    });
    builder.addCase(getRestaurant.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      // Handle rejection here if needed
    });
  },
});

export default restaurants.reducer;
