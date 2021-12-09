import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";

import MovieCard from './MovieCard.js'
import MovieLists from './MovieLists.js'
import MovieInfo from './MovieInfo.js'

function MovieContainer() {
  const [movies, setMovies] = useState([])
  const [clickedId, setClickedId] = useState(0)
  const [filteredActor, setFilteredActor] = useState('')
  const [filteredDecade, setFilteredDecade] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3004/movies')
    .then(r => r.json())
    .then(data => setMovies(data))
  },[])

  function handleActorChange(e) {
    setFilteredActor(e.target.value)
  }

  function handleDecadeChange(e) {
    setFilteredDecade(Number(e.target.value))
  }

  function handleFilmPage(id) {
    setClickedId(id)
  }

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

  return (
    <div className="container">
      <Switch>
        <Route exact path="/">
          <select onChange={handleActorChange}>
            <option value="">Filter by Actor...</option>
            <option value="Sean Connery">Sean Connery</option>
            <option value="George Lazenby">George Lazenby</option>
            <option value="Roger Moore">Roger Moore</option>
            <option value="Timothy Dalton">Timothy Dalton</option>
            <option value="Pierce Brosnan">Pierce Brosnan</option>
            <option value="Daniel Craig">Daniel Craig</option>
          </select>
          <select onChange={handleDecadeChange}>
            <option value="">Filter by Decade...</option>
            <option value={1960}>1960's</option>
            <option value={1970}>1970's</option>
            <option value={1980}>1980's</option>
            <option value={1990}>1990's</option>
            <option value={2000}>2000's</option>
            <option value={2010}>2010's</option>
          </select><br/>
          {movies.map((movie) =>
            {const displayCard = 
              <MovieCard 
                title={movie.Movie} 
                key={movie.id} 
                year={movie.Year} 
                id={movie.id}
                watched={movie.Watched}
                wantToWatch={movie.Want_To_Watch}
                handleFilmPage={handleFilmPage}
                onUpdateWant={onUpdateWant}
                onUpdateWatch={onUpdateWatch}
              />
            if (filteredDecade == "" && filteredActor == "") {
              return displayCard
            } else if (movie.Bond === filteredActor && filteredDecade == "") {
              return displayCard
            } else if (filteredActor == "" && filteredDecade <= movie.Year && filteredDecade + 10 > movie.Year) {
              return displayCard
            } else if (movie.Bond === filteredActor && filteredDecade <= movie.Year && filteredDecade + 10 > movie.Year) {
              return displayCard
            } else return null
          })}
        </Route>
        <Route path="/lists">
          <MovieLists 
            movies={movies} 
            onUpdateWant={onUpdateWant} 
            onUpdateWatch={onUpdateWatch}/>
        </Route>
        <Route path={clickedId}>
          <MovieInfo 
            movie={movies[clickedId]} 
            handleFilmPage={handleFilmPage}
            onUpdateWant={onUpdateWant}
            onUpdateWatch={onUpdateWatch}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default MovieContainer;