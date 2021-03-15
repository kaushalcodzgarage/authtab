import { combineReducers, PayloadAction } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import registeredUsers from 'screens/Auth/Registration/registration.slice'

const mainReducer = combineReducers({
    userState: userSlice,
    registeredUsers: registeredUsers,
});

const rootReducer = (state: any, action: PayloadAction<any>) => {
    // * Fire this action to clear store.
    if (action.type === 'CLEAR_STORE') {
        state = undefined;
    }
    return mainReducer(state, action);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;