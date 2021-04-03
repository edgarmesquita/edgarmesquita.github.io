import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserReducer from './user/reducer';
const reducer = combineReducers({
    user: UserReducer,
})
export const store = configureStore({ reducer });