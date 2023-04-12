import { createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthApi from "../../api/AuthApi.js";

export const userLogin = createAsyncThunk(
    "Auth/userLoginReq",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await AuthApi.logIn(formData);
            return response.data;
        } catch (error) {
           throw rejectWithValue(error.response.data);
        }
    }
);

export const userSignup = createAsyncThunk(
    "Auth/userSignupReq",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await AuthApi.signUp(formData);
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);
