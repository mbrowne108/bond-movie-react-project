import React from 'react';
import { Link } from "react-router-dom";

function MovieLists({ movies, onUpdateMovie }) {
  function handleUpdate(movie, e) {
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
    <div className="container">
      <h2>Your Movie Lists</h2>
      <div className="lists">
        <h3>Have Seen</h3>
          <ul>
            {movies.map((movie) => {
              if (movie.watched) {
                return <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.movie}</Link><button name="watched" onClick={(e) => handleUpdate(movie, e)}>X</button></li>
              } else return null
            })}
          </ul>
      </div>
      <div className="lists">
        <h3>Want To See</h3>
          <ul>
            {movies.map((movie) => {
              if (movie.want_to_watch) {
                return <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.movie}</Link><button name="want_to_watch" onClick={(e) => handleUpdate(movie, e)}>X</button></li>
              } else return null
            })}
          </ul>
      </div>
    </div>
  );
}

export default MovieLists;