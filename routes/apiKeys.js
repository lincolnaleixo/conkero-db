import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import morgan from 'morgan';
import ApiKey from '../models/ApiKey.js';

const router = express.Router();

router.use(morgan('dev')); // for logging

router.post('/', async (req, res) => {
    try {
        const apiKey = new ApiKey({
            key: uuidv4(),
            owner: req.body.owner
        })
        await apiKey.save();
        res.json(apiKey);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/validate/:key', async (req, res) => {
    try {
        const apiKey = await ApiKey.findOne({ key: req.params.key });
        if (apiKey) {
            res.json({ valid: true });
        } else {
            res.json({ valid: false });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
