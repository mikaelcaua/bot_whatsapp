import express from 'express';
import { sendMessage, responseMessage } from '../controllers/messageController.js';

const router = express.Router();

router.post('/send', sendMessage);

router.post('/response', responseMessage);

export default router;
