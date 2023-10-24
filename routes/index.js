const express = require('express');
const notesRouter = require('./notes') //route is connected. 

const app = express();

app.use('/notes', notesRouter); //takes notes

module.exports = app;