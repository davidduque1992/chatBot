const qrcode = require("qrcode-terminal");
const fs = require("fs");
const { Client, LegacySessionAuth, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "client-one",
  }),
});

client.on("authenticated", (session) => {});

client.initialize();
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

const send_message = ["5491154986930"];

client.on("ready", () => {
  console.log("Whatsapp Conectado con exito");

  send_message.map((value) => {
    const chatId = value + "@c.us";
    message = "Prueba 1 de envio de mensajes ";
    client.sendMessage(chatId, message);
  });
});
