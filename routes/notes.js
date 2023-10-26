const notes = require("express").Router(); //Turning on the express router so it understands it is a route.
const fs = require("fs");
const jsonData = require("../db/db.json");

notes.get("/notes", (req, res) => {
  res.json(jsonData);
});

notes.post("/notes",  (req, res) => {
  
  const readData = jsonData
  
  readData.push(req.body)
  
  fs.writeFileSync('./db/db.json', JSON.stringify(readData))
  
  res.json('note added')

});

module.exports = notes;
