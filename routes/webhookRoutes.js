import express from 'express';
import { verifyWebhook, handleMessages } from '../controllers/webhookController.js';

const router = express.Router();

router.get('/', verifyWebhook);

router.post('/', handleMessages);

export default router;
