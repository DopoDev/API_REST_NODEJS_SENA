const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();  //La constante app tendrá todo el funcionamiento del servidor

const {mongoose} = require('./database.js'); //hacemos la llamada de solo la conexión

/* Se crea una API REST, para enviar y recibir datos */

//Configuraciones
//      ('nombre_variable', 'valor')
app.set('port', process.env.PORT || 3000); //Se establece el puerto

app.use(morgan('dev')); //Se agrega el modulo morgan
app.use(express.json()); //método que ayuda a convertir el código para que el servido entienda lo que viene del cliente

app.use(cors({origin:'http://localhost:4200'})); //Método para comunicar con el cliente

////Rutas de nuestro servidor
app.use('/api/empleados', require('./src/routes/empleados.routes'));

//Inicializamos el servidor
app.listen(app.get('port'), () => { //Manera de configurar el puerto
  console.log('Servidor en el puerto: ', app.get('port'));
})
