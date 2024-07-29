import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCategories } from '../../API/categoriesApi';

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) => {
  try {
    const response = await fetchCategories();
    return response.data.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred';
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    isLoading: false,
    error: null,
    selectedCategory: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
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
      });
  },
});

export const {setCategories,  selectCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
