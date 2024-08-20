/* Se coloca el controlador como un ovjeto y luego se exportará
Se requiere primero el modelo del empleado realizado en la carpeta models */

const Empleados = require('../models/empleados');
const empleadoCtrl = {};

//DEFINIMOS LOS MÉTODOS

//OBTENER TODOS LOS EMPLEADOS [GET]
empleadoCtrl.getEmpleados = async (req, res) => {
  const empleados = await Empleados.find(); 
  res.json(empleados);
}

//CREAR EMPLEADO [POST]
empleadoCtrl.createEmpleados = async (req, res) => {
  const empleado = new Empleados(req.body);
  await empleado.save();
  res.json({
    'status': 'Empleado guardado'
  });
}

//CONSEGUIR UN UNICO EMPLEADO [GET BY ID]
empleadoCtrl.getUnicoEmpleado = async (req, res) => {
  const empleadoUnico = await Empleados.findById(req.params.id);
  res.json(empleadoUnico);
}

//ACTUALIZAR EMPLEADO [PUT]
empleadoCtrl.editarEmpleado = async(req, res) => {
  const {id} = req.params; 
  const empleadoEdit = {
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary 
  };
  await Empleados.findByIdAndUpdate(id, {$set: empleadoEdit}, {new: true});
  res.json({status: 'Empleado actualizado'});
}

//ELIMINAR EMPLEADO [DELETE]
empleadoCtrl.eliminarEmpleado = async(req, res) => {
  await Empleados.findByIdAndDelete(req.params.id); 
  res.json({status: 'empleado eliminado'});
}

//Exportamos el módulo
module.exports = empleadoCtrl;
