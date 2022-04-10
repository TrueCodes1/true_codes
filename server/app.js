import express from 'express';
const app = express();
const path = require("path");

import router from './routes/posts.js';

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use('/', router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port '+port+'...')
})