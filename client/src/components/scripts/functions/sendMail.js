
// IMPORTING ALL NECCESSARY NODE MODULES
import axios from 'axios';
import $ from 'jquery';

// DEFINING FUNCTION FOR SLEARING TH FORM
const clearForm = () => {
    $('#name-input').val('');
    $('#email-input').val('');
    $('#contact-textarea').val('')
}

// DEFINING FUNCTION FOR FIRST INPUT VALIDATION (CLIENT SIDE) AND POSTING THE MESSAGE AFTERWARDS
const sendMail = async (formData) => {

    let correct = true;
    let inputsNames = ['name', 'email', 'message'];

    // EACH INPUT CVALUE GETS VALIDATED IF IT HAS A VALUE (NOT AN EMPTY STRING)
    for (let element in formData) {
        let specific = formData[element];
        if (correct !== false) { // IF THE CORRECT VARIABLE IF NOT SET TO FALSE SO FAR
            if (specific.toString().replaceAll(' ', '').length < 1) { // THEN WE CHECK IF THE STRING IS NOT EMPTY
                correct = false; // IF THE STRING IS EMPTY, VARIABLE CORRECT IS SET TO FALSE AND IT WON'T BE CHANGED ANYMORE
                alert(`Please, fill in the ${inputsNames[element]} field. :-)`) // MESSAGE IS SHOWN TO FILL IN THE EMPTY FIELD
            }
        }
    }

    if (correct == true) { // IF THE CORRECT VARIABLE IS SET TO TRUE

        let toSend = {
            'name': formData[0],
            'email': formData[1],
            'message': formData[2]
        }

        axios.post( // POST REQUEST IS FECTHED
            '/contact',
            toSend
        )
        .then(
            res => res.data
        )
        .then(
            res => {
                if (res.success) {
                    alert(`Your message was successfuly sent! I'll respond in few hours. :-)`);
                    clearForm()
                } else if (res.error) {
                    if (res.error == 'invalid-email') {
                        alert('Please, eneter an email address of correct format. :-)')
                    } else if (res.error == 'an-empty-field') {
                        alert('Please, fill in all the input fields. :-)')
                    } else if (res.error == 'message-error') {
                        alert('Something went wrong, we are sorry. :-/ Please, try again a bit later.');
                        clearForm()
                    }
                }
            }
        )
        .catch((err) => {
            console.log(err)
        })

    }
    
}

export default sendMail 