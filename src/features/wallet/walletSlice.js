import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  walletBalance: 0,
  depositResponse: null,
  status: "idle",
  error: null,
};

export const fetchWalletBalance = createAsyncThunk(
  "wallet/fetchWalletBalance",
  async (token) => {
    const response = await axios.get(
      "https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/GetUserWalletBalance",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.data;
  }
);

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setWalletBalance(state, action) {
      state.walletBalance = Number(action.payload);
    },
    updateBalance(state, action) {
      state.walletBalance += Number(action.payload);
    },
    setDepositResponse(state, action) {
      state.depositResponse = action.payload;
    },
    clearDepositResponse(state) {
      state.depositResponse = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletBalance.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWalletBalance.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.walletBalance = action.payload;
      })
      .addCase(fetchWalletBalance.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {
  setWalletBalance,
  updateBalance,
  setDepositResponse,
  clearDepositResponse,
} = walletSlice.actions;

export default walletSlice.reducer;






