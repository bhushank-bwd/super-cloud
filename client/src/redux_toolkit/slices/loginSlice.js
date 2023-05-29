import { createSlice } from "@reduxjs/toolkit";
import getToken from "../../functions/getCookie";

const loginSlice = createSlice({
  name: "Login",
  initialState: {
    isLoggedIn: getToken("token") ? true : false,
    loggerName: getToken("userName") ? getToken("userName") : "Get Started",
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
});
export const {stepLogin,stepLogout} = loginSlice.actions
export default loginSlice.reducer;
