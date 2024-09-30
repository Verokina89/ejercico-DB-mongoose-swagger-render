const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index');

//Middleware manejar JSON
app.use(express.json());

//Ruta principal
app.use('/', routes);
// app.use('/tasks', routes);

// Configuración de Swagger
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

//Conexión a la base de datos
dbConnection();

// Configuración del puerto
app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}/`));