import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import About from './About.js'
import NavBar from './NavBar.js'
import MovieContainer from './MovieContainer.js'
import MovieLists from './MovieLists.js'
import MovieInfo from './MovieInfo.js'
import NewMovieForm from './NewMovieForm.js'

function App() {
  const [movies, setMovies] = useState([])
  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:3004/movies')
    .then(r => r.json())
    .then(data => setMovies(data))
  }, [])

  function onUpdateMovie(updatedMovie) {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === updatedMovie.id) {
        return updatedMovie
      } else {
        return movie
      }
    })
    setMovies(updatedMovies)
  }
  
  function onNewMovie(newMovie) {
    const newMovieArray = [...movies, newMovie]
    setMovies(newMovieArray)
    alert("Your new movie has been added!")
    history.push("/movies")
  }

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
          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
