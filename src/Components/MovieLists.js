import React from 'react';
import { Link } from "react-router-dom";

function MovieLists({movies, onUpdateWant, onUpdateWatch}) {
  return (
    <div className="container">
      <h2>Your Movie Lists</h2>
      <div className="lists">
        <h3>Have Seen</h3>
          <ul>
            {movies.map((movie) => {
              if (movie.Watched) {
                return (
                  <ul key={movie.id}>
                    <li><Link to={`/${movie.id}`}>{movie.Movie}</Link></li>
                    <button onClick={() => {
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
                    }}>X</button>
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
              if (movie.Want_To_Watch) {
                return (
                  <ul key={movie.id}>
                    <li><Link to={`/${movie.id}`}>{movie.Movie}</Link></li>
                    <button onClick={() => {
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
                    }}>X</button>
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