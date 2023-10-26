const express = require('express'); //importing express as a variable. 
//const path = require('path'); //imports path module from node js. Provides utilities for working with the file & directory path. 
//const fs = require('fs');
//const termData = require('./db/db.json')
const api = require('./routes/notes.js');
const html = require('./routes/index.js')
const PORT = process.env.PORT || 3001;

const app = express(); //put the express function from the library as a variable. 

app.use(express.json());//adds middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //Tells code where to find the html, css, & js files. 

// allowing data to be parse with the query string library.
app.use('/api', api);// Got a route called /api
app.use('/', html);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
