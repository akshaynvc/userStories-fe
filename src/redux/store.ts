import { Action, configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk, { ThunkAction } from "redux-thunk";
import userReducer from "./slices/userSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import authReduce from "./slices/authSlice";
import { UsersState } from "./modals/userModals";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  userReducer: userReducer,
  authReducer: authReduce,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, UsersState, unknown, Action<string>>;

export const persistor = persistStore(store);
