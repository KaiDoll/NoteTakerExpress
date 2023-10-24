const express = require('express');
const path = require('path');
const fs = require('fs');
const termData = require('./db/db.json')
const app = express();
const PORT = 3001;

app.use(express.static('public')); //Tells code where to find the html & css files. 

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('api/notes', (req, res) => res.json(termData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
