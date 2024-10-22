import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserStats, fetchUserById,  updateUserProfileApi  } from '../../API/userProfileApi';

export const fetchUserProfile = createAsyncThunk(
  'userProfile/fetchUserProfile',
  async (userID, { getState }) => {
    const state = getState();
    const token = state.auth.jwt;
    const response = await fetchUserStats(userID, token);
    return response.data;
  }
);

export const updateUserProfile = createAsyncThunk(
  'userProfile/updateUserProfile',
  async ({ id, username, email, msisdn }, { getState }) => {
    const state = getState();
    const token = state.auth.jwt;
    const response = await updateUserProfileApi({ id, username, email, msisdn, token });
    return response.data;
  }
);


export const fetchUserByIdProfile = createAsyncThunk(
  'userProfile/fetchUserByIdProfile',
  async (userID, { getState }) => {
    const state = getState();
    const token = state.auth.jwt;
    const response = await fetchUserById(userID, token);
    return response;
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
      state.isAuthenticated = false;
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
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUserByIdProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUserByIdProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProfile = action.payload.data;
      })
      .addCase(fetchUserByIdProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });


  },
});
export const { logoutUser } = userProfileSlice.actions;

export default userProfileSlice.reducer;




