// IMPORTING ALL NECCESSARY NODE MODULES
import express from 'express';
import bodyParser from 'body-parser';

// DEFINING ROUTER
const ContactRouter = express.Router();

// IMPORTING CONSTROLLERS
import contactController from '../../controllers/contact/contact.js';

// ASSIGNING SPECIFIC FUNCTIONS IN CONTROLLERS TO SPECIFIC ROUTES
ContactRouter.post('/', bodyParser.json(), contactController.processContact)

// EXPORTING ROUTER
export default { ContactRouter }