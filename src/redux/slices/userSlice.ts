import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunk/userThunk";
import { User, UsersState } from "../modals/userModals";

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    removeUsers:(state)=>{
      state.isLoading = false;
      state.users = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.error.message;
      });
  },
});
export const { removeUsers } = usersSlice.actions;
export default usersSlice.reducer;
