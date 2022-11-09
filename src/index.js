const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

// aqui se recibe el mensaje 
// client.on('message', message => {
// 	console.log(message.body);
// });

client.on('message', message => {
	if(message.body === 'Hola') {
		message.reply('Hola como estas?');
	}
});
 
const resp= client.sendMessage('+541150398806'+'@.us','prueba de mensaje  automatico')
console.log("enviado: ", resp);
client.initialize();


 