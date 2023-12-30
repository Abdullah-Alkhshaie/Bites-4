import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHeroProduct = createAsyncThunk(
  "herorProduct/fetchHeroProduct",
  async () => {
    const response = await axios.get("/products-data/hero-products.json");

    return response.data;
  }
);

export const fetchMenuProduct = createAsyncThunk(
  "menuProduct/fetchMenuProduct",
  async () => {
    const response = await axios.get("/products-data/menu.json");
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    heroProduct: [],
    menuProduct: [],
    heroStatu: "idle",
    menuStatu: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroProduct.pending, (state) => {
        state.heroStatu = "loading";
      })
      .addCase(fetchHeroProduct.fulfilled, (state, action) => {
        state.heroStatu = "succeeded";
        state.heroProduct = action.payload;
      })
      .addCase(fetchHeroProduct.rejected, (state, action) => {
        state.heroStatu = "failed";
        state.heroProduct = action.error.message;
      })
      .addCase(fetchMenuProduct.pending, (state) => {
        state.menuStatu = "loading";
      })
      .addCase(fetchMenuProduct.fulfilled, (state, action) => {
        state.menuStatu = "succeeded";
        state.menuProduct = action.payload;
      })
      .addCase(fetchMenuProduct.rejected, (state, action) => {
        state.menuStatu = "failed";
        state.menuProduct = action.error.message;
      });
  },
});

export default productsSlice.reducer;
