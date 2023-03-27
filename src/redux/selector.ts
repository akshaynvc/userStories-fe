import { createSelector } from "@reduxjs/toolkit";

export const UserSelector = createSelector(
  (state: any) => state.userReducer,
  (userReducer) => userReducer
);

export const authselector = createSelector(
  (state: any) => state.authReducer,
  (authReducer) => authReducer
);
