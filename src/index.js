const express = require("express");
const qrcode = require("qrcode-terminal");
const fs = require("fs");
const { Client, LegacySessionAuth, LocalAuth } = require("whatsapp-web.js");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
});
const client = new Client({
  authStrategy: new LocalAuth(),
});

//Muestra los datos de la session guardada localmente en la carpeta .wwebjs_auth
// console.log(client.authStrategy);

let fecha = new Date();

client.on("authenticated", (session) => {});

client.initialize();
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Listo");
  app.post("/whatsappApi", (req, res) => {
    const { token, numero, mensaje } = req.body;
    fecha = new Date();
    if (token && numero && mensaje) {
      if (token === "20077186") {
        const chatId = numero + "@c.us";
        client.sendMessage(chatId, mensaje);

        res.json({ nuemero:numero,value: mensaje, resp: "success" });
      } else {
        res.json({ resp: "token Invalido" });
      }
    } else {
      res.json({ resp: "error al procesar la  peticion" });
    }
  });
});
