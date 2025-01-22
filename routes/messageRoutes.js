import express from 'express';
import { sendMessage, responseMessage } from '../controllers/messageController.js';

const router = express.Router();

router.post('/', sendMessage);

router.post('/', responseMessage);

export default router;
