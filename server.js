// server.js
import express from 'express';
import bodyParser from 'body-parser';
import { sendMessage } from './controller/messageController.js';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/send-message', sendMessage);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
