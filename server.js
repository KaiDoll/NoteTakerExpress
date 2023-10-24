const express = require('express'); //importing express as a variable. 
const path = require('path');
//const fs = require('fs');
//const termData = require('./db/db.json')
const api = require('./routes/index.js');
const PORT = process.env.PORT || 3001;

const app = express(); //put the express function from the library as a variable. 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);


app.use(express.static('public')); //Tells code where to find the html & css files. 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
}); 

app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html'))); //maybe add pages

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
