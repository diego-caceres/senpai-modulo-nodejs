const express = require('express');
const { verifyToken } = require('../middlewares/jwt-validate');

const router = express.Router();

const listaDeTareas = [
  {
    titulo: 'Prueba 1',
    prioridad: 'prioridad-baja',
    autor: 'Sistema'
  }
];

router.get('/', (req, res) => {

  res.send({
    tareas: listaDeTareas
  })
})

router.post('/', (req, res) => {

  const titulo = req.body.titulo;
  const prioridad = req.body.prioridad;

  const nuevaTarea = {
    titulo: titulo, 
    prioridad,
    autor: 'req.user.name'
  }

  listaDeTareas.push(nuevaTarea);

  res.send({
    tareas: listaDeTareas,
    tareaNueva: nuevaTarea,
  })
})

module.exports = {
  router: router,
  listaDeTareas: listaDeTareas
}
