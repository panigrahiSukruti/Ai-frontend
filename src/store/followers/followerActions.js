import { createAsyncThunk } from "@reduxjs/toolkit";
import github_api from "../../utils/ServerApi";
import { createSlice } from "@reduxjs/toolkit";

export const fetchFollowers = createAsyncThunk(
    "repo/fetchFollowers",
    async (username) => {
        const response = await github_api.get(`/users/${username}/followers`);
        return response.data;
    }
);

const followerSlice = createSlice({
    name: "followers",
    initialState: {
        data: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchFollowers.pending, (state) => {
          state.loading = true;
          state.error = null;
        });
        builder.addCase(fetchFollowers.fulfilled, (state, action) => {
          state.data = action.payload;
          state.loading = false;
        });
        builder.addCase(fetchFollowers.rejected, (state, action) => {
          state.error = action.error.message || "Something went wrong";
          state.loading = false;
        });
    },
})

export default followerSlice.reducer;