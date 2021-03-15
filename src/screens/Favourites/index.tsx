import Header from 'components/Header';
import { colors, strings } from 'config';
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import styles from './styles';

const Favourites = () => {
    return (
        <SafeAreaView style={styles.safearea}>
            <StatusBar barStyle={'light-content'} backgroundColor={colors.primary} />
            <Header title={strings.favourites} />
            <View style={styles.container}>

            </View>
        </SafeAreaView>
    )
}

export default Favourites;