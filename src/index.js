const qrcode = require("qrcode-terminal");

const { Client } = require("whatsapp-web.js");
const client = new Client();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});



// aqui se recibe el mensaje
// client.on('message', message => {
// 	console.log(message.body);
// });

//aqui recibe el mensaje y devuelve el otro mensaje con reply
// client.on('message', message => {
// 	if(message.body === 'Hola') {
// 		message.reply('Hola desde el bot');
// 	}
// });

client.on('ready', () => {
	console.log('Client is ready!');
   
	 // Number where you want to send the message.
	const number = "+5491150398806";
   
	 // Your message.
	const text = "Hola desde el script";
   
	 // Getting chatId from the number.
	 // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
	const chatIdd = number.substring(1) + "@c.us";
   
	// Sending message.
	client.sendMessage(chatIdd, text);
   });

// Sending message.
client.initialize();
