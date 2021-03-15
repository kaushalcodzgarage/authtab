import { colors } from 'config';
import Snackbar from 'react-native-snackbar';

type AlertType = 'error' | 'success' | 'alert'

/**
 * Shows toast at the bottom of the screen
 * @param text message with needs to be dispalyed 
 * @param type type of alert
 * @param duration for alert message
 */
const showAlert = (text: string, type: AlertType = 'alert', duration: number = Snackbar.LENGTH_SHORT) => {
    const backgroundColor = type === 'error'
        ? colors.error
        : type === 'success'
            ? colors.success
            : colors.lightBlack;
    if (text.length > 0) {
        Snackbar.show({
            text,
            duration,
            backgroundColor,
        });
    }
};

/**
 * Checkes string length
 * @param text string that needs to be check
 * @returns true if if string length is 0 else returns false
 */
const isEmpty = (text: string) => {
    return text.trim().length === 0;
};

/**
 * Checks email 
 * @param email which needs to be validate
 * @returns true if email is valid else returns false
 */
const isValidEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

/**
 * Checks password
 * @param pass which needs to be validate
 * @returns true if password is valid else returns false
 */
const isValidPassword = (pass: string) => {
    return pass.length >= 6;
}

export { showAlert, isEmpty, isValidEmail, isValidPassword }