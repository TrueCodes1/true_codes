
// IMPORTING ALL THE NECCESSARY NODE MODULES
import nodemailer from 'nodemailer';

const processContact = async (req, res) => {

    res.header("Access-Control-Allow-Origin", "*");

    res.send({
        'success': true
    }).end()

}

export default { processContact }