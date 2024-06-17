import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, signupApi } from "../../API/authApi";

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await loginApi.post("/Authorization/Login", {
        username,
        password,
      });
      const { token, ...userData } = response.data;
      localStorage.setItem("jwt", token);
      return { token, ...userData };
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Unknown error occurred";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    try {
      const response = await signupApi.post("/Users/CreateUser", {
        username: userData.username,
        email: userData.email,
        msisdn: userData.phoneNumber,
        password: userData.password,
      });

      const { statusCode, statusMessage, message, data } = response.data;

      if (statusCode !== "999") {
        throw new Error(statusMessage || "Signup failed");
      }
      return { message, data };
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Unknown error occurred";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

const initialState = {
  userID: null,
  userType: null,
  username: null,
  walletBalance: null,
  tokenExpiry: null,
  jwt: localStorage.getItem("jwt") || null,
  isLoading: false,
  isAuthenticated: !!localStorage.getItem("jwt"),
  error: null,
  success: false,
  status: "idle",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userID = action.payload.userID;
        state.userType = action.payload.userType;
        state.username = action.payload.username;
        state.walletBalance = action.payload.walletBalance;
        state.tokenExpiry = action.payload.tokenExpiry;
        state.jwt = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
        state.success = true;
        state.status = "succeeded";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Login failed";
        state.isAuthenticated = false;
        state.status = "failed";
        state.error = action.error.message;
        console.error("Login error:", action.error);
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userID = action.payload.userID;
        state.userType = action.payload.userType;
        state.username = action.payload.username;
        state.walletBalance = action.payload.walletBalance;
        state.tokenExpiry = action.payload.tokenExpiry;
        state.jwt = action.payload.token;
        state.isAuthenticated = true;
        state.error = null;
        state.success = true;
        state.status = "succeeded";
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Signup failed";
        state.isAuthenticated = false;
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
