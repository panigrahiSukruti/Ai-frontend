import { createSlice } from "@reduxjs/toolkit";
import { fetchUserData } from "./userActions";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    loading : false,
    error : null
  },
  reducers:{},
extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchUserData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
      builder.addCase(fetchUserData.rejected, (state, action) => {
        state.error = action.error.message || "Something went wrong";
        state.loading = false;
      });
  },
});

export default userSlice.reducer;