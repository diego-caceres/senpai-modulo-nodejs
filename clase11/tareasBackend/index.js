// En index.js
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');

const { verifyToken } = require('./middlewares/jwt-validate');

const app = express();
const PORT =  3000;

app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// Solo en desarrollo
app.use(cors());

app.use('/auth', authRouter);

app.get('/tareas', (req, res) => {

  res.send({
    tareas: listaDeTareas
  })
})

app.post('/tareas', verifyToken, (req, res) => {

  const titulo = req.body.titulo;
  const prioridad = req.body.prioridad;

  const nuevaTarea = {
    titulo: titulo, 
    prioridad,
    autor: req.user.name
  }

  listaDeTareas.push(nuevaTarea);

  res.send({
    tareas: listaDeTareas,
    tareaNueva: nuevaTarea,
  })
})

app.get('/ping', verifyToken, function (req, res) {
  return res.send('pong');
});

app.listen(PORT, function () {
  console.log(`El servidor quedo corriendo en el puerto ${PORT}`);
});


const listaDeTareas = [
  {
    titulo: 'Prueba 1',
    prioridad: 'prioridad-baja',
    autor: 'Sistema'
  }
]
