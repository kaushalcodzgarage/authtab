import { useNavigation } from '@react-navigation/core';
import { colors } from 'config';
import { constants } from 'config/constants';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type HProps = {
    showBack?: boolean;
    title?: string;
}

const Header: FC<HProps> = ({
    showBack,
    title
}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.leftView}>
                {
                    showBack
                    &&
                    <TouchableOpacity onPress={() => { navigation.goBack() }} hitSlop={constants.hitslop}>
                        <Icon name="chevron-left" size={20} color={colors.primary} />
                    </TouchableOpacity>}
            </View>
            <View style={styles.centerView}>
                <Text style={styles.titleStyle}>{title}</Text>
            </View>
            <View style={styles.rightView}></View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    leftView: {
    },
    centerView: {

    },
    rightView: {

    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.white
    }
});
