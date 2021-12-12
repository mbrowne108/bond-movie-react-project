import React from 'react';
import { Link } from "react-router-dom";

function MovieCard({ movie, onUpdateMovie }) {
  function handleUpdate(e) {
    fetch(`http://localhost:3004/movies/${movie.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        [e.target.name]: !movie[e.target.name]
      }),
    })
      .then(r => r.json())
      .then((updatedMovie) => onUpdateMovie(updatedMovie))
  }


  return (
    <div className="card">
      <h4><Link to={`/movies/${movie.id}`}>{movie.movie}</Link></h4>
      <p>{movie.year}</p>
      <button className="button" name="watched" onClick={handleUpdate}>Watched? {movie.watched ? '☑' : '☐'}</button>
      <button className="button" name="want_to_watch" onClick={handleUpdate}>Want to Watch? {movie.want_to_watch ? '☑' : '☐'}</button>
    </div>
  );
}

export default MovieCard;