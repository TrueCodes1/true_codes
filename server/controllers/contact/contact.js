
// IMPORTING ALL THE NECCESSARY NODE MODULES
import nodemailer from 'nodemailer';

// IMPORTING ALL THE NECCESSARY FUNCTIONS
import formValidation from '../../functions/contact/formValidation.js';

const processContact = async (req, res) => {

    let body = req.body;

    let validation = await formValidation(body); // THE DATA IS VALIDATED USING IMPORTED FUNCTION

    if (validation == 'valid') { // IF THE DATA IS VALID
        
        let output = `
            <body>
                <h1>
                    You have recieved new message from <b>${body.name}</b>, one of the visitors of your portfolio.
                </h1>
                <h4>
                    ${body.message}
                </h4>
                <h3>
                    Respond here ${body.email}
                </h3>
            </body>
        `;

        let mailOptions = {
            from: '"New Contact" <truecodes.dev@gmail.com>',
            to: 'truecodes.dev@gmail.com',
            subject: 'New Contact Request',
            text: 'New message from one of your visitors',
            html: output
        }
        
        //Part for sending emails - nodemailer
        //create transporter
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, //true for 465
            auth: {
                user: 'truecodes.dev@gmail.com',
                pass: 'uvfyjpamxsacugrc'
            },
            tls: {
                rejectUnauthorized: false
            }
        })
        //send mail with defined transporter object
        transporter.sendMail(mailOptions, async (error, infoo) => {
            if (error){
                console.log(error);
                res.header("Access-Control-Allow-Origin", "*").send({
                    error: 'message-error'
                }).end()
            } else {
                res.header("Access-Control-Allow-Origin", "*").send({
                    success: true
                }).end()
            }
        })

    } else { // ELSE, USER IS RETURNED ERROR SAYING WHAT'S WRONG WITH THE DATA
        res.header("Access-Control-Allow-Origin", "*").send({
            'error': validation.toString()
        }).end()
    }

}

export default { processContact }