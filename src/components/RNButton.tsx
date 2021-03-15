import { colors } from 'config';
import React, { FC } from 'react';
import { View, Text, Pressable, StyleSheet, StyleProp, PressableProps, ViewStyle, TextStyle } from 'react-native';

type RTypes = {
    lable: string;
    style?: StyleProp<ViewStyle>;
    lableStyle?: StyleProp<TextStyle>;
    onPress?: () => any;
}

const RNButton: FC<RTypes> = ({
    lable,
    style,
    lableStyle,
    onPress,
}) => {
    return (
        <Pressable
            onPress={onPress}
            android_ripple={{ color: colors.whiteOpacity(0.2) }}
            style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, styles.container, style]}
        >
            <Text numberOfLines={1} style={[styles.labelStyle, lableStyle]}>{lable}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 8,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    labelStyle: {
        color: colors.white,
        fontWeight: '600',
    }
})

export default RNButton;
