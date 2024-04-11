import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface SessionState {
    isLogin: boolean
}

const initialState: SessionState = {
    isLogin: false
}

export const sessionSlice = createSlice({
    name: 'session',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        loginSession: (state, action: PayloadAction<any>) => {
            state.isLogin = action.payload.isLogin;
        }
    }
});

export const { loginSession } = sessionSlice.actions;

export default sessionSlice.reducer;