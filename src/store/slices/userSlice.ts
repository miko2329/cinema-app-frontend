import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../index.ts";

type UserState = {
    accessToken: string;
    refreshToken: string;
    userResponse: {
        id: number;
        firstname: string;
        lastname: string;
        email: string;
        role: string;
    };
};

export const initialUserState: UserState = {
    accessToken: "",
    refreshToken: "",
    userResponse: {
        email: "",
        firstname: "",
        id: 0,
        lastname: "",
        role: ""
    }
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        set: (state, action: PayloadAction<UserState>) => {
           return action.payload
        }
    }
})

export const {set} = userSlice.actions
export const userSelector = (state: RootState) => state.persistedReducer;
export default userSlice.reducer