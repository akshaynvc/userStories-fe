import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi } from "../../api/authApi";
import { login } from "../slices/authSlice";

export const loginCall = createAsyncThunk(
  "auth/loginCall",
  async (value: any, { dispatch }) => {
    try {
      const response = await loginApi(value);
      dispatch(login(response));
      return response;
    } catch (error: any) {
      return Promise.reject(error.message);
    }
  }
);
