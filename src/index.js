const express = require('express');
const cors = require('cors');
const movies = require('./movies.json');


// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

const staticServerPath = './src/public-react'
server.use(express.static(staticServerPath));


// get movies

server.get('/movies' , (req, res)=>{
 const response = movies;

res.json(response);

})

