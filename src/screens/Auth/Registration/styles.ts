import { colors } from "config";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flexGrow: 1,
        backgroundColor: colors.white,
        justifyContent: 'space-around'
    },
    titleText: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.primary,
    },
    inputStyle: {
        marginHorizontal: 20
    },
    buttonStyle: {
        marginHorizontal: 20
    }
});