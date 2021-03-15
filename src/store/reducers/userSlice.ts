
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserDetails } from 'screens/Auth/Registration/types';
import { User } from 'types/common';

const initialState: User = {
    email: '',
    name: '',
    contactNo: '',
    password: '',
};

const userSlice = createSlice({
    name: 'userDetails',
    initialState: initialState,
    reducers: {
        setUserDetails(state, { payload }: PayloadAction<User>) {
            return payload
        },
        clearUserDetails() {
            return initialState;
        }
    }
});

export const {
    setUserDetails,
    clearUserDetails
} = userSlice.actions;

export default userSlice.reducer;