require('dotenv-safe').config()
const express = require('express')
const cors = require('cors')
const db = require('./database/mongooseConnect')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const app = express()
const empreendedorasRoutes = require("./routes/empreendedorasRoutes");
const usersRoutes = require("./routes/usersRoutes");


app.use(express.json())
app.use(cors())
db.connect()
app.use('/minha-rota-de-documentacao/', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/", empreendedorasRoutes);
app.use("/users", usersRoutes);


module.exports = app 