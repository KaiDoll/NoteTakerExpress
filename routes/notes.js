const notes = require('express').Router(); //Turning on the express router so it understands it is a route. 
const fs = require('fs');

notes.get('/api/notes', (req, res) => {
fs.readFile('./db/db.json')
.then((data) => res.json(JSON.parse(data)))
.catch((err) => {
    console.error(err);
})
});

notes.post('/', (req, res) => {
    console.log(req.body);
})
module.exports = notes;