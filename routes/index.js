const router = require('express').Router(); //using router from express.
const path = require('path'); //imports path module from node js. Provides utilities for working with the file & directory path. 

router.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '../public/notes.html'))); 

router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
}); 

module.exports = router;