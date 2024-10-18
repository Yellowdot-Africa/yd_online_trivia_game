import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  walletBalance: 0,
  depositResponse: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletBalance(state, action) {
      // state.walletBalance = action.payload;
      state.walletBalance = Number(action.payload); 
    },
    updateBalance(state, action) {
      // state.walletBalance += action.payload;
      state.walletBalance += Number(action.payload);
    },
  
    setDepositResponse(state, action) {
      state.depositResponse = action.payload;
    },
    clearDepositResponse(state) {
      state.depositResponse = null;
    },
  },
});

export const { setWalletBalance, updateBalance, setDepositResponse, clearDepositResponse } = walletSlice.actions;

export default walletSlice.reducer;




