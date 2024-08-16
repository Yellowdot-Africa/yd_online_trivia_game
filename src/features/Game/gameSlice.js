import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  gameId: null,  // Initialize gameId as null or any default value
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameId: (state, action) => {
      state.gameId = action.payload;
    },
  },
});

export const { setGameId } = gameSlice.actions;
export default gameSlice.reducer;
