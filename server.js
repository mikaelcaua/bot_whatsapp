import express from 'express';
import messageRoutes from './routes/messageRoutes.js';
import webhookRoutes from './routes/webhookRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/message', messageRoutes);
app.use('/webhook', webhookRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
