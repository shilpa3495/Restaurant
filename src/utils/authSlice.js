import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../constant";

//create action
export const createAuth = createAsyncThunk("createAuth", async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/pwa/user/register`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    return response.config.data;
  } catch (error) {
    // Handle errors here
    console.error("Error:", error);
  } 
});

export const authDetail = createSlice({
  name: "authDetail",
  initialState: {
    phoneNumber: {},
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder.addCase(createAuth.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createAuth.fulfilled, (state, action) => {
      state.loading = false;
      console.log("ac",action.payload)
      state.phoneNumber = action.payload;
    });
    builder.addCase(createAuth.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      // Handle rejection here if needed
    });
  },
});

export default authDetail.reducer;
