
const formValidation = async (data) => {

    let email = data.email;
    let name = data.name;
    let message = data.message;

    // SECOND VALIDATION TAKES PLACE HERE, CHECKING IF THE STRINGS ARE NOT EMPTY AND
    if (email.length > 0 && name.length > 0 && message.length > 0) {
        if (email.split('@').length == 2) { // FURTHER CHECKS OF EMAIL ADDRESS FORMAT
            if (email.split('@')[1].includes('.')) {
                return 'valid'
            } else { // IF THERE'S STH WRONG WITH EMAIL ADDRESS, USER IS RETURNED THE DATA AND ASKED TO CORRECT THE FORM
                return 'invalid-email'
            }
        } else { // IF THERE'S STH WRONG WITH EMAIL ADDRESS, USER IS RETURNED THE DATA AND ASKED TO CORRECT THE FORM
            return 'invalid-email'
        }
    } else { // IF THERE'S STH WRONG WITH EMAIL ADDRESS, USER IS RETURNED THE DATA AND ASKED TO CORRECT THE FORM
        return 'an-empty-field'
    }

}

export default formValidation