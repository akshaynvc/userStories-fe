import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteUser, getAllusers, updateUser } from "../../api/userApi";

export const fetchUsers = createAsyncThunk("fetchUsers/users", async () => {
  try {
    const response = await getAllusers();
    return response;
  } catch (error: any) {
    return Promise.reject(error.message);
  }
});

export const updateUserCall = createAsyncThunk(
  "updateUserCall/users",
  async ({ value, id }: { value: any; id: string }) => {
    try {
      const response = await updateUser(value, id);
      return response;
    } catch (error: any) {
      return Promise.reject(error.message);
    }
  }
);

export const deleteUserCall = createAsyncThunk(
  "deleteUserCall/users",
  async ({ id }: { id: string }) => {
    try {
      const response = await deleteUser(id);
      return response;
    } catch (error: any) {
      return Promise.reject(error.message);
    }
  }
);
