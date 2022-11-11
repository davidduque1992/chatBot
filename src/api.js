var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
  res.send(alerta());
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto '+app.get('port'));
});

function alerta(){
return "Hola desde function alerta";
}