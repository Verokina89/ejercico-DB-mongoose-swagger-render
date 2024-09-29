require('dotenv').config();
const express = require('express');
const app = express();
const { dbConnection } = require('./config/config');
const routes = require('./routes');
const mongoose = require("mongoose");
const swaggerUI = require('swagger-ui-express');
const docs = require('./docs/index');

app.use(express.json());

app.use('/', routes);

dbConnection();
app.use('/tasks', routes);

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(docs))

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));