import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types/common';

const initialState: User[] = []

const registeredUsers = createSlice({
    name: 'registeredUsers',
    initialState,
    reducers: {
        addUser(state, { payload }: PayloadAction<User>) {
            state.push(payload);
        },
    }
});

export const {
    addUser,
} = registeredUsers.actions;
export default registeredUsers.reducer;