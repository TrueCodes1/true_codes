
// IMPORTING ALL NECCESSARY NODE MODULES
import $ from 'jquery';
import axios from 'axios';

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

    if (correct == true) {

        axios.post('http://localhost:5000/contact', {
            name: formData.name,
            email: formData.email,
            message: formData.message
            //NOT WORKING FROM HERE - 404 NOT FOUND ERROR
        })
        .then(
            res => res.json()
        )
        .then(
            res => {
                if (res.success) {
                    alert('sent!;')
                } else {
                    alert(`something's going wrong`)
                }
            }
        )

    }
    
}

export default sendMail 