import { strings } from "config";
import { isEmpty, isValidEmail, isValidPassword, showAlert } from "utils";
import { UserDetails } from "./types";

/**
 * Valadites user details
 * @param user object of user details 
 * @returns true if all field pass the validation else returns false
 */
const isValid = (user: UserDetails) => {
    if (isEmpty(user.name)) {
        showAlert(strings.enterFullName, 'error');
        return false;
    } else if (isEmpty(user.email)) {
        showAlert(strings.enterEmail, 'error');
        return false;
    } else if (!isValidEmail(user.email)) {
        showAlert(strings.validEmail, 'error');
        return false;
    } else if (isEmpty(user.contactNo)) {
        showAlert(strings.enterContact, 'error');
        return false;
    } else if (user.password.length === 0) {
        showAlert(strings.enterPassword, 'error');
        return false;
    } else if (!isValidPassword(user.password)) {
        showAlert(strings.passwordValidationMessage, 'error');
        return false;
    } else if (user.password !== user.cPassword) {
        showAlert(strings.cPassNotMatch, 'error');
        return false;
    }
    return true;
};

export { isValid };