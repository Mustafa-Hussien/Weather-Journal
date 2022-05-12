// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
var express = require('express');
// Start up an instance of app
var app = express();
/* Middleware*/
var bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
var cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

const server = app.listen(port, () => {
    console.log("server running"); 
    console.log(`running on localhost: ${port}`)
})

// Get request
const projectData = {};

app.get('/', (req, res) => {
    res.send(projectData);
})

// Post request

app.post('/', (req, res) => {
    let data = req.body;
    projectData["temperature"]= data.main.temp;
    projectData["date"]= data.timezone;
    projectData["user response"]= document.getElementById('feelings').value;
})