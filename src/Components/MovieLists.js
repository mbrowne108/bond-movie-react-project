import React from 'react';
import { Link } from "react-router-dom";

function MovieLists({ movies, onUpdateMovie }) {
  function handleWatched(movie) {
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

  function handleWantToWatch(movie) {
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
    <div className="container">
      <h2>Your Movie Lists</h2>
      <div className="lists">
        <h3>Have Seen</h3>
          <ul>
            {movies.map((movie) => {
              if (movie.watched) {
                return (
                  <ul key={movie.id}>
                    <li><Link to={`/movies/${movie.id}`}>{movie.movie}</Link></li>
                    <button onClick={(e) => handleWatched(movie)}>X</button>
                  </ul>
                )
              } else return null
            })}
          </ul>
      </div>
      <div className="lists">
        <h3>Want To See</h3>
          <ul>
            {movies.map((movie) => {
              if (movie.want_to_watch) {
                return (
                  <ul key={movie.id}>
                    <li><Link to={`/movies/${movie.id}`}>{movie.movie}</Link></li>
                    <button onClick={(e) => handleWantToWatch(movie)}>X</button>
                  </ul>
                )
              } else return null
            })}
          </ul>
      </div>
    </div>
  );
}

export default MovieLists;