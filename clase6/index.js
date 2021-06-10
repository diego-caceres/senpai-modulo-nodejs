const express = require('express');
const app = express();

app.get('/', function(request, response, next) {
  setTimeout(() => {
    try {
      objNoDefinido.x = 100;
      response.send('Llego a ' + request.originalUrl);
    } catch (err) {
      next(err);
    }
  }, 100);
});

app.listen(3001, function () {
  console.log('App corriendo en el puerto 3001');
});