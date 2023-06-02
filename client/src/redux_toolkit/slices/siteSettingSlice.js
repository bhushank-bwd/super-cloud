import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const subscribeAPI = createAsyncThunk("subscribeAPI", async (email) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = await fetch(`${apiUrl}api/public/subscribe`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  });
  const jsonData = await response.json();
  return jsonData;
});
const siteSettingsSlice = createSlice({
  name: "Site",
  initialState: {
    progress: 0,
    isLoading: false,
    subscribeAPIData: null,
  },
  reducers: {
    setProgress: (state, action) => {
      return {
        ...state,
        progress: action.payload,
        subscribeAPIData: null,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(subscribeAPI.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(subscribeAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.subscribeAPIData = action.payload;
    });
    builder.addCase(subscribeAPI.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});
export const { setProgress } = siteSettingsSlice.actions;
export default siteSettingsSlice.reducer;
