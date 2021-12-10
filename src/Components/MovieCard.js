import React from 'react';
import { Link } from "react-router-dom";

function MovieCard({ movie, onUpdateMovie }) {
  function handleWatched() {
    fetch(`http://localhost:3004/movies/${movie.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        watched: !movie.watched
      }),
    })
      .then(r => r.json())
      .then((updatedMovie) => onUpdateMovie(updatedMovie))
  }

  function handleWantToWatch() {
    fetch(`http://localhost:3004/movies/${movie.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        want_to_watch: !movie.want_to_watch
      }),
    })
      .then(r => r.json())
      .then((updatedMovie) => onUpdateMovie(updatedMovie))
  }

  return (
    <div className="card">
      <h4><Link to={`/movies/${movie.id}`}>{movie.movie}</Link></h4>
      <p>{movie.year}</p>
      <button className="button" onClick={handleWatched}>Watched? {movie.watched ? '☑' : '☐'}</button>
      <button className="button" onClick={handleWantToWatch}>Want to Watch? {movie.want_to_watch ? '☑' : '☐'}</button>
    </div>
  );
}

export default MovieCard;