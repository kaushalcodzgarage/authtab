import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthStackParamList } from './types';
import Login from 'screens/Auth/Login';
import Registration from 'screens/Auth/Registration';
import BottomTabs from './BottomTabs';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

const Stack = createStackNavigator<AuthStackParamList>();

function Router() {
    const userState = useSelector((state: RootState) => state.userState);
    return (
        <>
            <NavigationContainer>
                {
                    userState.email
                    &&
                    <BottomTabs />
                    ||
                    <Stack.Navigator headerMode={'none'}>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Registration" component={Registration} />
                    </Stack.Navigator>
                }
            </NavigationContainer>
        </>
    );
}

export default Router;