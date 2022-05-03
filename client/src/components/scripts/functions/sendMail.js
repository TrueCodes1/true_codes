
// IMPORTING ALL NECCESSARY NODE MODULES
import axios from 'axios';
import $ from 'jquery';

const sendMail = async (formData) => {

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

        axios({
            method: 'POST',
            url: '/contact',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(
            res => res.data
        )
        .then(
            res => {
                if (res.success) {
                    alert('Success!')
                }
            }
        )
        .catch((err) => {
            console.log(err)
        })

    }
    
}

export default sendMail 