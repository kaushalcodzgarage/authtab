import { colors } from 'config';
import React, { FC } from 'react';
import { StyleProp, StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from 'react-native';

type IProps = {
    inputRef?: any;
    containerStyle?: StyleProp<ViewStyle>;
} & TextInputProps;

export const InputText: FC<IProps> = (props) => {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <TextInput
                {...props}
                ref={props.inputRef}
                style={styles.inputStyle}
                selectionColor={colors.primary}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 8,
        marginVertical: 10,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,

        elevation: 3,
    },
    inputStyle: {
        flex: 1,
        paddingHorizontal: 20,
    }
});
