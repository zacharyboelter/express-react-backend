/////////////////////////////////////////////////////////////
//  Dependencies
/////////////////////////////////////////////////////////////
const express = require('express');
const cors = require('cors');


/////////////////////////////////////////////////////////////
//  JSON FIles
/////////////////////////////////////////////////////////////
const projects = require('./projects.json');
const about = require('./about.json');


/////////////////////////////////////////////////////////////
//  App Object
/////////////////////////////////////////////////////////////
const app = express();


/////////////////////////////////////////////////////////////
//  Middleware
/////////////////////////////////////////////////////////////
app.use(cors());


/////////////////////////////////////////////////////////////
//  Home Route for Testing App
/////////////////////////////////////////////////////////////
app.get("/", (req, res) => {
    res.send('hello world');
});


/////////////////////////////////////////////////////////////
//  Route for Retrieving Projects
/////////////////////////////////////////////////////////////
app.get('/projects', (req, res) => {
    // send projects via json
    res.json(projects);
});


/////////////////////////////////////////////////////////////
//  Route for Retrieving ABout Info
/////////////////////////////////////////////////////////////
app.get('/about', (req, res) => {
    // send projects via json
    res.json(about);
});


/////////////////////////////////////////////////////////////
//  Port
/////////////////////////////////////////////////////////////
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Aye wadda ya know ${PORT}`));