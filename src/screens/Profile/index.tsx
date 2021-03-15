import Header from 'components/Header';
import { colors, strings } from 'config';
import React from 'react';
import { Alert, Button, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { useAppDispatch } from 'store';
import { clearUserDetails, setUserDetails } from 'store/reducers/userSlice';
import styles from './styles';

const Profile = () => {

    const dispatch = useAppDispatch();

    /**
     * Handles logout button press event and clears current user details form local storage
     */
    const onLogoutPress = () => {
        Alert.alert(
            strings.logout,
            strings.logoutConfirmationMessage,
            [
                {
                    text: strings.yes,
                    onPress: () => {
                        dispatch(clearUserDetails());
                    }
                },
                {
                    text: strings.no,
                },
            ]
        )
    };

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
            <Header title={strings.profile} />
            <View style={styles.container}>
                <Button
                    title={'Logout'}
                    onPress={onLogoutPress}
                    color={colors.primary}
                />
            </View>
        </SafeAreaView>
    )
}

export default Profile;