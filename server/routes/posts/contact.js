// IMPORTING ALL NECCESSARY NODE MODULES
import express from 'express';

// DEFINING ROUTER
const ContactRouter = express.Router();

// IMPORTING CONSTROLLERS
import contactController from '../../controllers/contact/contact.js';

// ASSIGNING SPECIFIC FUNCTIONS IN CONTROLLERS TO SPECIFIC ROUTES
ContactRouter.post('/', contactController.processContact)

// EXPORTING ROUTER
export default { ContactRouter }