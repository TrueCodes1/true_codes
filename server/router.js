// IMPORTIN ALL NECCESSARY NODE MODULES
import express from 'express';

// DEFINING ROUTER
const MainRouter = express.Router();

// IMPORTIN SPECIFIC ROUTERS FOR SPECIFIC ROUTES
import Contact from './routes/posts/contact.js';

// *************************************************************************************************
// ASSIGNING SPECIFIC ROUTES TO SPECIFIC ROUTERS ***************************************************
// *************************************************************************************************

// BOTH '/' AND '/index' ROUTES ARE DIRECTING TO HOMEPAGE
MainRouter.post('/contact', Contact.ContactRouter);

// *************************************************************************************************
// ASSIGNING SPECIFIC ROUTES TO SPECIFIC ROUTERS ENDS HERE *****************************************
// *************************************************************************************************

//EXPORTING MAIN ROUTER
export default MainRouter