import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./login";

export const reducer = combineReducers({login: loginReducer});

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
