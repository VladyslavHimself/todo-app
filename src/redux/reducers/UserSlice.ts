import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/IUser';

interface IUserState {
    user: IUser | null;
    isLoading: boolean;
    error: string;
}

const initialState: IUserState = {
    user: null,
    isLoading: false,
    error: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
});

export default userSlice.reducer;
