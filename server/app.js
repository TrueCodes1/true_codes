import express from 'express';
import path from 'path';

const app = express();

import router from './routes/posts.js';

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

//This will create a middleware.
//When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get('*', (req, res) => {
    /*
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
    */
   
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
    
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Listening on port '+port+'...')
})