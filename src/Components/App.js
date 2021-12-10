import React, { useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import About from './About.js'
import NavBar from './NavBar.js'
import MovieContainer from './MovieContainer.js'
import MovieLists from './MovieLists.js'
import MovieInfo from './MovieInfo.js'
import NewMovieForm from './NewMovieForm.js'

function App() {
  const [movies, setMovies] = useState([])

  function onNewMovie(newMovie) {
    setMovies(...movies, newMovie)
  }

  function onUpdateMovie(updatedMovie) {
    let updatedMovies = movies.map((movie) => {
      if (movie.id === updatedMovie.id) {
        return updatedMovie
      } else {
        return movie
      }
    })
    setMovies(updatedMovies)
  }

  useEffect(() => {
    fetch('http://localhost:3004/movies')
    .then(r => r.json())
    .then(data => setMovies(data))
  },[])

  return (
    <div>
      <header id="header">
        <h1>James Bond Movie List</h1>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/movies">
            <MovieContainer movies={movies} onUpdateMovie={onUpdateMovie} />
          </Route>
          <Route path='/movies/new'>
            <NewMovieForm onNewMovie={onNewMovie} />
          </Route>
          <Route path='/movies/:id'>
            <MovieInfo movies={movies} onUpdateMovie={onUpdateMovie} />
          </Route>
          <Route path="/lists">
            <MovieLists movies={movies} onUpdateMovie={onUpdateMovie} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
