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
      const { jwt, ...userData } = response.data;
      if (!jwt) {
        throw new Error("Token is not defined in the response");
      }
      localStorage.setItem("jwt", jwt);
      return { jwt, ...userData };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response
          ? error.response.data.message || "Unknown error occurred"
          : "An error occurred. Please try again later."
      );
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
  loginError: null,
  signUpError: null,
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
        state.loginError = null;
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userID = action.payload.userID;
        state.userType = action.payload.userType;
        state.username = action.payload.username;
        state.walletBalance = action.payload.walletBalance;
        state.tokenExpiry = action.payload.tokenExpiry;
        state.jwt = action.payload.jwt;
        state.isAuthenticated = true;
        state.loginError = null;
        state.success = true;
        state.status = "succeeded";
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.loginError = action.payload || "Login failed";
        state.isAuthenticated = false;
        state.status = "failed";
        // console.error("Login error:", action.error);
      })
      .addCase(signup.pending, (state) => {
        state.isLoading = true;
        state.signUpError = null;
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
        state.signUpError = null;
        state.success = true;
        state.status = "succeeded";
      })
      .addCase(signup.rejected, (state, action) => {
        state.isLoading = false;
        state.signUpError = action.payload || "Signup failed";
        state.isAuthenticated = false;
        state.status = "failed";
        // console.error("Signup error:", action.error);
      });
  },
});

export default authSlice.reducer;



