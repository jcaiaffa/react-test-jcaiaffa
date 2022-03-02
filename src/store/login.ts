import { createSlice } from "@reduxjs/toolkit";

type LoginState = {
  username: string;
}
const initialState:LoginState = { username: '' };

const {actions, reducer} = createSlice({name: "login", initialState, reducers: {
    setUsername: (state, { payload }) => {
        state.username = payload;
    },
    unsetUsername: (state, { payload }) => {
        state.username = "";
    }
        
 }});

export const { setUsername } = actions;

export default reducer;