/* 
  Se crearán las rutas del servidor
  se crearán los modulos por eso se utilizará express
  se utilizará como nuestra rest API para enviar y recibir datos en formato JSON
*/

const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleados.controller.js');
//Generamos un ejemplo cuando le soliciten algo al servidor por el método get

router.get('/', empleadoCtrl.getEmpleados);
router.post('/', empleadoCtrl.createEmpleados);
router.get('/:id', empleadoCtrl.getUnicoEmpleado);
router.put('/:id', empleadoCtrl.editarEmpleado);
router.delete('/:id', empleadoCtrl.eliminarEmpleado); 

module.exports = router; 