import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getToken from "../../functions/getCookie";

export const loginAPI = createAsyncThunk("loginAPI", async (loginData) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = await fetch(`${apiUrl}api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: loginData.username,
      password: loginData.password,
    }),
  });
  const jsonData = await response.json();
  return jsonData;
});
export const registernAPI = createAsyncThunk(
  "registernAPI",
  async (registerData) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const response = await fetch(`${apiUrl}api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: registerData.email,
        password: registerData.password,
        confirm_password: registerData.confirm_password,
        phoneno: registerData.mob,
        username: registerData.username,
      }),
    });
    const jsonData = await response.json();
    return jsonData;
  }
);
const loginSlice = createSlice({
  name: "Login",
  initialState: {
    isLoggedIn: getToken("token") ? true : false,
    loggerName: getToken("userName") ? getToken("userName") : "Get Started",
    isLoading: false,
    loginAPIData: null,
    registerAPIData: null,
    isError: null,
  },
  reducers: {
    stepLogin: (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
        loginData: null,
        loggerName: action.payload.userName,
        registerAPIData: null,
        isLoading: false,
      };
    },
    stepLogout: (state, action) => {
      return {
        ...state,
        isLoggedIn: false,
        loginAPIData: null,
        loggerName: "Get Started",
        registerAPIData: null,
        isLoading: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAPI.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.registerAPIData = null;
      state.loginAPIData = action.payload;
    });
    builder.addCase(loginAPI.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(registernAPI.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(registernAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.registerAPIData = action.payload;
      state.loginAPIData = null;
    });
    builder.addCase(registernAPI.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});
export const { stepLogin, stepLogout } = loginSlice.actions;
export default loginSlice.reducer;
