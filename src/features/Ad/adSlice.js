import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAdsFromAPI } from "../../API/adApi";

export const fetchAds = createAsyncThunk(
  "ads/fetchAds",
  async (_, { getState }) => {
    const state = getState();
    const token = state.auth.jwt;

    if (!token) {
      throw new Error("No token found");
    }

    const response = await fetchAdsFromAPI(token);
    return response;
  }
);

const adSlice = createSlice({
  name: "ads",
  initialState: {
    ads: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAds.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAds.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.ads = action.payload;
      })
      .addCase(fetchAds.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export default adSlice.reducer;




