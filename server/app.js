import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();

import MainRouter from './router.js';

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use(cors());


app.use('/', MainRouter);


app.get('*', (req, res) => {
    
    res.sendFile(path.resolve(__dirname, '/../client/build', 'index.html'));
    
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port '+port+'...')
})