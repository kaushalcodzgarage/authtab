import { colors } from "config";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    titleText: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold',
        color: colors.primary,
        marginBottom: 80,
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
    },
    signUp: {
        color: colors.primary,
        fontWeight: 'bold',
    }
});