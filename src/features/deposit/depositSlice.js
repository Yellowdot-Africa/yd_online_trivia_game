import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const makePayment = createAsyncThunk(
  'deposit/makePayment',
  async ({ msisdn, amount, fullname, email }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/MakePayment',
        { msisdn, amount, fullname, email },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,  
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addUnits = createAsyncThunk(
  'deposit/addUnits',
  async ({ units, amountPaid, paymentReferenceNumber }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://onlinetriviaapi.ydplatform.com:2023/api/YellowDotTrivia/Wallets/AddUnits',
        {
          units,
          amountPaid,
          paymentSource: 'Web',
          paymentReferenceNumber,
          comments: 'Added using Flutterwave online payment',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const depositSlice = createSlice({
  name: 'deposit',
  initialState: {
    msisdn: '',
    amount: '',
    fullname: '',
    email: '',
    loading: false,
    error: null,
    paymentUrl: null,
  },
  reducers: {
    setMsisdn: (state, action) => {
      state.msisdn = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setFullname: (state, action) => {
      state.fullname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetForm: (state) => {
      state.msisdn = '';
      state.amount = '';
      state.fullname = '';
      state.email = '';
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(makePayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(makePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentUrl = action.payload.data; 
        localStorage.setItem('paymentReferenceNumber', action.payload.paymentReferenceNumber);
      })
      .addCase(makePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to initiate payment';
      })
      .addCase(addUnits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUnits.fulfilled, (state, action) => {
        state.loading = false;
        state.paymentUrl = null;
      })
      .addCase(addUnits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to add units';
      });
  },
});

export const { setMsisdn, setAmount, setFullname, setEmail, resetForm, clearError } = depositSlice.actions;

export default depositSlice.reducer;




