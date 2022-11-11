const qrcode = require("qrcode-terminal");
const fs = require("fs");
const { Client, LegacySessionAuth, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "clienteuno",
  }),
});


client.initialize();
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});


const send_number = "5491154986930";
const send_message = "Hola de prueba";
client.on("ready", () => {
  const autenticacion = new LegacySessionAuth();
console.log(autenticacion);
  enviar(send_number, send_message);
});

function enviar(numero, message) {
  console.log(numero + " => " + message);
  client.on("ready", () => {
    const chatId = numero + "@c.us";
    client.sendMessage(chatId, message);
  });
}
