import { createAsyncThunk } from "@reduxjs/toolkit";
import github_api from "../../utils/ServerApi";
import { createSlice } from "@reduxjs/toolkit";

export const fetchRepos = createAsyncThunk(
    "repo/fetchRepos",
    async (username) => {
        const response = await github_api.get(`/users/${username}/repos`);
        return response.data;
    }
);

const repoSlice = createSlice({
  name: "repo",
  initialState: {
    data: [],
    loading : false,
    error : null
  },
  reducers:{},
extraReducers: (builder) => {
      builder.addCase(fetchRepos.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(fetchRepos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
      builder.addCase(fetchRepos.rejected, (state, action) => {
        state.error = action.error.message || "Something went wrong";
        state.loading = false;
      });
  },
});

export default repoSlice.reducer;