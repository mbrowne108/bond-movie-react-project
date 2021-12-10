import React from 'react';
import { Link } from "react-router-dom";

function MovieCard( {movie, onUpdateWant, onUpdateWatch} ) {
  function handleWatched() {
    fetch(`http://localhost:3004/movies/${movie.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Watched: !movie.Watched
      }),
    })
      .then(r => r.json())
      .then((updatedMovie) => onUpdateWatch(updatedMovie))
  }

  function handleWantToWatch() {
    fetch(`http://localhost:3004/movies/${movie.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Want_To_Watch: !movie.Want_To_Watch
      }),
    })
      .then(r => r.json())
      .then((updatedMovie) => onUpdateWant(updatedMovie))
  }

  return (
    <div className="card">
      <h4><Link to={`/${movie.id}`}>{movie.Movie}</Link></h4>
      <p>{movie.Year}</p>
      <button className="button" onClick={handleWatched}>Watched? {movie.Watched ? '☑' : '☐'}</button>
      <button className="button" onClick={handleWantToWatch}>Want to Watch? {movie.Want_To_Watch ? '☑' : '☐'}</button>
    </div>
  );
}

export default MovieCard;