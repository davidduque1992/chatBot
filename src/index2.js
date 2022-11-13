const express = require("express");
const morgan = require("morgan");

const app = express();

app.set('port', process.env.PORT || 3001)

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(app.get('port'), () => {
  console.log("Server on port "+app.get("port"));
});
app.post("/whatsappApi", (req, res) => {
  console.log(req.body)
  res.json({"title": "hola json"});

});