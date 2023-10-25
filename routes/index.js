const router = require('express').Router(); //using router from express.
const path = require('path'); //imports path module from node js. Provides utilities for working with the file & directory path. 
//const fs = require('fs');
//const notesRouter = require('./notes') //route is connected. 

// const app = express();

//app.use('/notes', notesRouter); //takes notes MIDDLEWARE usually done in server.

router.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '../public/notes.html'))); 

router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}); 

module.exports = router;