import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategories, fetchGames } from '../../API/categoriesApi';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.jwt;
  
    try {
      const response = await fetchCategories(token);
      return response.data.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getGames = createAsyncThunk(
  'games/getGames',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.jwt;

    try {
      const response = await fetchGames(token);
      return response.data.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred';
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    games: [],
    isLoading: false,
    error: null,
    selectedCategory: null,
    selectedGame: null,
    selectedLanguage: 'english',
  },
  reducers: {
    
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setGames: (state, action) => {
      state.games = action.payload;
    },
    selectGame: (state, action) => {
      state.selectedGame = action.payload;
    },
    setLanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch categories';
      })
      .addCase(getGames.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getGames.fulfilled, (state, action) => {
        state.games = action.payload;
        state.isLoading = false;
      })
      .addCase(getGames.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch games';
      });
  },
});

export const { setCategories, selectCategory, setGames, selectGame, setLanguage } = categoriesSlice.actions;

export default categoriesSlice.reducer;



