const express = require('express');
const cors = require('cors');

const Database = require("better-sqlite3");
const db =new Database('./src/database.db', {
  verbose: console.log
});


// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
server.set('view engine', 'ejs');

server.get('/movie/:movieId', (req, res)=>{
  console.log(req.params.movieId);
  const movieId= req.params.movieId;
  
  const foundMovie = movies.find(movie => movie.id === movieId);
  console.log(foundMovie);
  //res.json(foundMovie);
  res.render('movie' , foundMovie);
  
})

const staticServerPath = './src/public-react'
server.use(express.static(staticServerPath));


// get movies

server.get('/movies' , (req, res)=>{
 
  const query= db.prepare('SELECT * FROM movies');
  const movies= query.all();
  const objectMovies = {
    success: true,
    movies: movies
  }
res.json(objectMovies);

})

