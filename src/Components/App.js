import React, { useState, useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';

import MovieContainer from './MovieContainer.js'
import NavBar from './NavBar.js'
import MovieLists from './MovieLists.js'
import MovieInfo from './MovieInfo.js'

function App() {
  const [movies, setMovies] = useState([])

  function onUpdateWatch(updatedMovie) {
    let updatedMovies = movies.map((movie) => {
      if (movie.id === updatedMovie.id) {
        return updatedMovie
      } else {
        return movie
      }
    })
    setMovies(updatedMovies)
  }

  function onUpdateWant(updatedMovie) {
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
            <MovieContainer movies={movies} onUpdateWant={onUpdateWant} onUpdateWatch={onUpdateWatch} />
          </Route>
          <Route path="/lists">
            <MovieLists movies={movies} onUpdateWant={onUpdateWant} onUpdateWatch={onUpdateWatch} />
          </Route>
          <Route path='/:id'>
            <MovieInfo onUpdateWant={onUpdateWant} onUpdateWatch={onUpdateWatch} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
