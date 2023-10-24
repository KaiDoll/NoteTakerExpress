const express = require('express'); //importing express as a variable. 
const path = require('path');
const fs = require('fs');
//const termData = require('./db/db.json')
const api = require('./routes/index.js');
const PORT = process.env.PORT || 3001;

const app = express(); //put the express function from the library as a variable. 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);// Got a route called /api


app.use(express.static('public')); //Tells code where to find the html & css files. 


//Front end routes for index & notes html 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
}); 

app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))); 

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
