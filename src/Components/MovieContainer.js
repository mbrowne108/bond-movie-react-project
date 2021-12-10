import React, { useState } from 'react';
import MovieCard from './MovieCard.js'

function MovieContainer({ movies, onUpdateMovie }) {
  const [filteredActor, setFilteredActor] = useState('')
  const [filteredDecade, setFilteredDecade] = useState(0)

  function handleActorChange(e) {
    setFilteredActor(e.target.value)
  }

  function handleDecadeChange(e) {
    setFilteredDecade(Number(e.target.value))
  }

  const filteredMovies = movies.filter((movie) => filteredActor === movie.bond || filteredActor === "")
    .filter((movie) => filteredDecade === 0 || (filteredDecade <= movie.year && filteredDecade + 10 > movie.year))

  return (
    <div className="container">
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
        <option value={0}>Filter by Decade...</option>
        <option value={1960}>1960's</option>
        <option value={1970}>1970's</option>
        <option value={1980}>1980's</option>
        <option value={1990}>1990's</option>
        <option value={2000}>2000's</option>
        <option value={2010}>2010's</option>
      </select><br/>
      {filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} onUpdateMovie={onUpdateMovie} />)}
    </div>
  );
}

export default MovieContainer;