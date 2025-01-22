import axios from 'axios';
import tokens_acess from '../utills/tokens_acess.js';
import { addNineInNumber } from '../utills/formatter.js';

const sendMessage = async (to) => {
  try {
    await axios.post(
      `https://graph.facebook.com/v15.0/${tokens_acess.phoneNumberId}/messages`,
      {
        messaging_product: 'whatsapp',
        to: to,
        type: "template",
        template: { "name": "hello_world", "language": { "code": "en_US" } }
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

const responseMessage = async (sender) => {
  const formatedNumber = addNineInNumber(sender);
  try {
    await axios.post(
      `https://graph.facebook.com/v15.0/${tokens_acess.phoneNumberId}/messages`,
      {
        messaging_product: 'whatsapp',
        to: formatedNumber,
        type: "template",
        template: { "name": "hello_world", "language": { "code": "en_US" } }
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
