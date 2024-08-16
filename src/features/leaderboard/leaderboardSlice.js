import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLeaderboard } from "../../API/leaderboardApi";

export const getLeaderboard = createAsyncThunk(
  "leaderboard/getLeaderboard",
  async (gameId, { getState }) => {
    const state = getState();
    const token = state.auth.jwt;
    console.log("leaderboard slice:", token);
    const response = await fetchLeaderboard(gameId, token);
    return response.data;
  }
);

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLeaderboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLeaderboard.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getLeaderboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default leaderboardSlice.reducer;
