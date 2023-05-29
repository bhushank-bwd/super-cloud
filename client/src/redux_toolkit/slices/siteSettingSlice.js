import { createSlice } from "@reduxjs/toolkit";

const siteSettingsSlice = createSlice({
  name: "Progress",
  initialState: {
    progress: 0,
  },
  reducers: {
    setProgress: (state, action) => {
      return {
        ...state,
        progress: action.payload,
      };
    },
  },
});
export const { setProgress } = siteSettingsSlice.actions;
export default siteSettingsSlice.reducer;
