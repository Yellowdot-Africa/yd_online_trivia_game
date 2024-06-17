import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userProfileApi from "../../API/userProfileApi";


export const fetchUserProfile = createAsyncThunk(
  'userProfile/fetchUserProfile',
  async ({userID,token}) => {
    try {
    const response = await userProfileApi.get(`/Users/GetUserStats?userID=${userID}`,{
        headers: {
            Authorization: `Bearer ${token}`,
          },

    });
    console.log('API Response:', response.data);
    return response.data.data;
} catch (error) {
    console.error('Fetch user profile failed:', error);
    throw error; 
  }
  }
);

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState: {
    userStats: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
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

export default userProfileSlice.reducer;
