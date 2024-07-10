import { createAsyncThunk } from "@reduxjs/toolkit";
import github_api from "../../utils/ServerApi";

export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async (username) => {
        const response = await github_api.get(`/users/${username}`);
        return response.data;
    }
);