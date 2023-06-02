import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import siteReducer from "./slices/siteSettingSlice";

export const store = configureStore({
  reducer: {
    loginInfo: loginReducer,
    siteSettings: siteReducer,
  },
});
