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

const loginSlice = createSlice({
  name: "Login",
  initialState: {
    isLoggedIn: getToken("token") ? true : false,
    loggerName: getToken("userName") ? getToken("userName") : "Get Started",
    isLoading: false,
    data: null,
    isError: null,
  },
  reducers: {
    stepLogin: (state, action) => {
      return {
        ...state,
        isLoggedIn: true,
        loggerName: action.payload.userName,
      };
    },
    stepLogout: (state, action) => {
      return {
        ...state,
        isLoggedIn: false,
        loggerName: "Get Started",
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAPI.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(loginAPI.rejected, (state, action) => {
      state.isError = true;
      console.log(action.payload);
    });
  },
});
export const { stepLogin, stepLogout } = loginSlice.actions;
export default loginSlice.reducer;
