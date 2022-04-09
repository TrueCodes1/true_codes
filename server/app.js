import express from 'express';
const app = express();

import router from './routes/posts.js';

app.use('/', router);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port '+port+'...')
})