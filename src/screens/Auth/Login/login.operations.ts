import { strings } from "config";
import { isEmpty, isValidEmail, isValidPassword, showAlert } from "utils";

const isValid = (email: string, password: string) => {
    if (isEmpty(email)) {
        showAlert(strings.enterEmail, 'error');
        return false;
    } else if (!isValidEmail(email)) {
        showAlert(strings.validEmail, 'error');
        return false;
    } else if (password.length === 0) {
        showAlert(strings.enterPassword, 'error');
        return false;
    }
    return true;
};

export { isValid }