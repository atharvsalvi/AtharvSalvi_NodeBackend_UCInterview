const express = require('express');
const app = express();
const port = 5000;

const showRoutes = require('./routes/showRoutes.js')
app.use('/', showRoutes);

app.listen(port);