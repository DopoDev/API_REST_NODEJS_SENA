const mongoose = require('mongoose');

const URI = 'mongodb://localhost/empleados'; //URI de la base de datos

mongoose.connect(URI)
.then(db => console.log('Base de datos conectada'))
.catch(err => console.log('error al conectar a la base de datos: ', err));

module.exports = mongoose;
