const qrcode = require("qrcode-terminal");
const fs = require("fs");
const { Client, LegacySessionAuth, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "clienteuno",
  }),
});

client.on("authenticated", (session) => {});

client.initialize();
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

const send_message = ["5491154986930"];

client.on("ready", () => {
  console.log("Listo");

  send_message.map((value) => {
    const chatId = value + "@c.us";
    message = "Prueba  de envio ";
    client.sendMessage(chatId, message);
  });
});
