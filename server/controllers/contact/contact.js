
// IMPORTING ALL THE NECCESSARY NODE MODULES
import nodemailer from 'nodemailer';

// IMPORTING ALL THE NECCESSARY FUNCTIONS
import formValidation from '../../functions/contact/formValidation.js';

const processContact = async (req, res) => {

    let body = req.body;

    let validation = await formValidation(body); // THE DATA IS VALIDATED USING IMPORTED FUNCTION

    if (validation == 'valid') { // IF THE DATA IS VALID
        
        

    } else { // ELSE, USER IS RETURNED ERROR SAYING WHAT'S WRONG WITH THE DATA
        res.header("Access-Control-Allow-Origin", "*").send({
            'error': validation.toString()
        }).end()
    }

}

export default { processContact }