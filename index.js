require('dotenv').config();
const express = require('express');
const app = express();
const { dbConnection } = require('./config/config');
const routes = require('./routes');
// const mongoose = require("mongoose");
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index');

//Middleware manejar JSON
app.use(express.json());

//Conexión a la base de datos
dbConnection();

//Ruta principal
app.use('/tasks', routes);

// Configuración de Swagger
app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

// Configuración del puerto
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));