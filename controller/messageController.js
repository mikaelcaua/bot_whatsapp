import axios from 'axios';
import tokens_acess from '../utills/tokens_acess.js';

const sendMessage = async (req, res) => {
  const { to } = req.body;

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
    res.status(200).send('Mensagem enviada com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao enviar a mensagem.');
  }
};

export { sendMessage };
