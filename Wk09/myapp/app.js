// importing express.js module
const express = require('express');
//create an object of the express module
const app = express();
//set the port to 3000
const port = 3000;

// Middleware function goes here....

//Routing goes here....

// make the server listen on port number
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Routing goes here....
app.get('/', function (req, res) {
    res.send('Hello World!');
  });
  
  //Respond to POST request on the root route (/), the application’s home page:
  app.post('/', function (req, res) {
    res.send('Got a POST request');
  });
  
  //Respond to a PUT request to the /user route:
  app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
  });
  
  //Respond to a DELETE request to the /user route:
  app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
  });