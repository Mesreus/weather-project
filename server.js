// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
let express = require('express');
// Starting an instance of app
let app = express();
//Dependencies
let bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 2221;
const server = app.listen(port, ()=>{
    console.log(`running server on: http://localhost:${port}`)
});

// All Routes initializing with a callback function
// Get request with a callback function sendData
app.get('/all',sendData);

// Callback function (sendData) to complete Get '.all' from projectData

function sendData(req,res) {
    res.send(projectData);
    projectData = {};
}
// Post request with a callback function addData

app.post('/add',addData);
function addData (req,res) {
    console.log(req.body);
    newEntry = {
        date: req.body.date,
        temp:req.body.temp,
        content: req.body.content
    }
    projectData.push(newEntry);

}
