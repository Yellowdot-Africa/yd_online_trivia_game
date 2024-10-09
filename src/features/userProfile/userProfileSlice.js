import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserStats } from '../../API/userProfileApi';

export const fetchUserProfile = createAsyncThunk(
  'userProfile/fetchUserProfile',
  async (userID, { getState }) => {
    const state = getState();
    const token = state.auth.jwt;
    const response = await fetchUserStats(userID, token);
    return response.data;
  }
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    userProfile: null,
    userStats: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      state.userStats = null;
      state.isLoading = false;
      state.error = null;
      localStorage.clear();
      sessionStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userStats = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});
export const { logoutUser } = userProfileSlice.actions;

export default userProfileSlice.reducer;




