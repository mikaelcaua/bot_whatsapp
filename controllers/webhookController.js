import { responseMessage } from './messageController.js';
import tokens_acess from '../utills/tokens_acess.js';

const verifyWebhook = (req, res) => {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token === tokens_acess.webhookToken) {
        console.log('Webhook verified');
        res.status(200).send(challenge);
    } else {
        res.status(403).send('Verification failed');
    }
};

const handleMessages = (req, res) => {
    const body = req.body;

    console.log('Mensagem recebida: ', body);

    if (body.object) {
        const messages = body.entry[0].changes[0].value.messages;
        if (messages && messages.length > 0) {
            messages.forEach((message) => {
                const sender = message.from;
                const msgText = message.text.body;
                console.log(`Mensagem recebida de ${sender}: ${msgText}`);
                responseMessage(sender)
            });
        }
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
};


export { verifyWebhook, handleMessages }
