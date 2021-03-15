import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from 'screens/Home';
import { BottomTabParamList } from './types';
import { colors } from 'config';
import Favourites from 'screens/Favourites';
import Places from 'screens/Places';
import Profile from 'screens/Profile';

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: colors.gray,
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="heart" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="Places"
                component={Places}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="map-marker" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default BottomTabs;