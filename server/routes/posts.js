import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('I am here.')
})

export default router;