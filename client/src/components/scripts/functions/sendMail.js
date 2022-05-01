
// IMPORTING ALL NECCESSARY NODE MODULES
import $ from 'jquery';

const sendMail = (formData) => {

    let correct = true;
    let inputsNames = ['name', 'email', 'message'];

    for (let element in formData) {
        let specific = formData[element];
        if (correct !== false) {
            if (specific.toString().replaceAll(' ', '').length < 1) {
                correct = false;
                alert(`Please, fill in the ${inputsNames[element]} field. :-)`)
            }
        }
    }
    
}

export default sendMail 