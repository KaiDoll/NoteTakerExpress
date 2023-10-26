const notes = require("express").Router(); //Turning on the express router so it understands it is a route.
const fs = require("fs");
const jsonData = require("../db/db.json"); //retrieve information from db.json.

notes.get("/notes", (req, res) => {
  res.json(jsonData); 
}); //function responding to the browser with the data. Display it on the page so it can be read.

notes.post("/notes",  (req, res) => {
  
  const readData = jsonData
  
  readData.push(req.body)
  
  fs.writeFileSync('./db/db.json', JSON.stringify(readData))

  res.json('note added')

}); //Request being sent to the browser. 

module.exports = notes;
