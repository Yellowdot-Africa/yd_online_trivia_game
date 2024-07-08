import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import contactUsApi from '../../API/contactApi'; 


const initialState = {
  name: '',
  mobile: '',
  email: '',
  message: '',
  subject: '',
  isLoading: false,
  error: null,
  success: false,
};



export const submitContactForm = createAsyncThunk(
  'contactUs/submitContactForm',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await contactUsApi.submitContactForm(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setMobile: (state, action) => {
      state.mobile = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    setSubject: (state, action) => {
      state.subject = action.payload;
    },
    resetForm: (state) => {
      state.name = '';
      state.mobile = '';
      state.email = '';
      state.message = '';
      state.subject = '';
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitContactForm.fulfilled, (state) => {
        state.isLoading = false;
        state.success = true;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setName, setMobile, setEmail, setMessage, setSubject, resetForm } = contactUsSlice.actions;

export default contactUsSlice.reducer;




