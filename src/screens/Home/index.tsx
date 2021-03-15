import Header from 'components/Header';
import { colors, strings } from 'config';
import React from 'react';
import { Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import styles from './styles';
import Toast from 'NativeModules/Toast';

const Home = () => {

    /**
     * Show toast form native module
     */
    const onShowToastPress = () => {
        if (Platform.OS === 'android') {
            Toast.show('Toast from native module', 2000);
        } else {
            Toast.show({ text: 'Toast from native module', duration: Toast.LENGTH_SHORT }, () => { });
        }
    }

    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
            <Header title={strings.home} />
            <View style={styles.container}>
                <Button
                    title={'Show Toast'}
                    onPress={onShowToastPress}
                    color={colors.primary}
                />
            </View>
        </SafeAreaView>
    )
}

export default Home;