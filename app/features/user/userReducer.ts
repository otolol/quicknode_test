import { createSlice } from "@reduxjs/toolkit"
import { User } from "./user";
import { login } from "./userAction";


export interface UserState {
    isLogedIn: boolean;
    hasError: boolean;
    loading: 'idle' | 'pending' | 'success' | 'failed';
    user: User | null
}

const initialState: UserState = {
    isLogedIn: false,
    hasError: false,
    loading: 'idle',
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state, action) => {
            state.loading = 'pending';
        });
        builder.addCase(login.fulfilled, (state, action) => {
            const {address} = action.payload;
            state.user = {address};
            state.isLogedIn = Boolean(address);
            state.loading = 'success';
        });
        builder.addCase(login.rejected, (state, action) => {
            state.loading = 'failed';
            state.hasError = true;
            state.isLogedIn = false;
        });
    }  

})

export default userSlice.reducer