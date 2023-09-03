const express = require('express');
const app = new express();
const router = require('./src/routes/api');


//routes
app.use('/api',router);



module.exports =app;