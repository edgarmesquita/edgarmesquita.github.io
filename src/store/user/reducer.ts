import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageService } from '../../services';
import { IUserToken, IUserState } from "./types";

const localStorageService = new LocalStorageService();
const userTokenJson = localStorageService.getItem('user_token');
const userToken = userTokenJson ? JSON.parse(userTokenJson) : null;
const initialState: IUserState = {
    token: userToken,
    isLoadingUser: false
}

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadingUser: (state: IUserState) => {
            state.isLoadingUser = true;
        },
        storeUserToken: (state: IUserState, action: PayloadAction<IUserToken>) => {
            state.isLoadingUser = false;
            state.token = action.payload;
            localStorageService.setItem('user_token', JSON.stringify(action.payload));
        },
        clearUser: (state: IUserState) => {
            state.isLoadingUser = false;
            state.token = null;
            localStorageService.removeItem('user_token');
        },
    }
});

export default slice.reducer;