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

export const userUpdate = createAsyncThunk(
    "Auth/userUpdateReq",
    async (formData, { rejectWithValue }) => {
        // console.log(formData);
        try {
            const response = await AuthApi.updateUser(formData);
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);

export const changePassword = createAsyncThunk(
    "Auth/changePasswordReq",
    async (formData, { rejectWithValue }) => {
        try {
            const response = await AuthApi.changePassword(formData);
            return response.data;
        } catch (error) {
            throw rejectWithValue(error.response.data);
        }
    }
);