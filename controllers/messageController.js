import axios from 'axios';
import tokens_acess from '../utills/tokens_acess.js';
import { addNineInNumber } from '../utills/formatter.js';

const sendMessage = async (req, res) => {
  const { to } = req.body;
  try {
    await axios.post(
      `https://graph.facebook.com/v21.0/${tokens_acess.phoneNumberId}/messages`,
      {
        messaging_product: 'whatsapp',
        to: to,
        type: "template",
        template: { "name": "test_message", "language": { "code": "pt_BR" } }
      },
      {
        headers: {
          Authorization: `Bearer ${tokens_acess.accessToken}`,
        },
      }
    );
    res.status(200).send('Mensagem enviada com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao enviar a mensagem.');
  }
};

const responseMessage = async (sender) => {
  const formatedNumber = addNineInNumber(sender);
  try {
    await axios.post(
      `https://graph.facebook.com/v21.0/${tokens_acess.phoneNumberId}/messages`,
      {
        messaging_product: 'whatsapp',
        to: formatedNumber,
        type: "template",
        template: { "name": "test_message", "language": { "code": "pt_BR" } }
      },
      {
        headers: {
          Authorization: `Bearer ${tokens_acess.accessToken}`,
        },
      }
    );
    console.log('Mensagem enviada com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar a mensagem: ', error);
  }
};

export { sendMessage, responseMessage };
