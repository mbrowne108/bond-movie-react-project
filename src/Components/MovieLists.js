import React from 'react';

function MovieLists({movies, onUpdateWant, onUpdateWatch}) {
  return (
    <div>
      <h2>Your Movie Lists</h2>
      <div className="lists">
        <h3>Have Seen</h3>
          <ul>
            {movies.map((movie) => {
              if (movie.Watched) {
                return (
                  <div>
                    <li>{movie.Movie}</li>
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
                  </div>
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
                  <div>
                    <li>{movie.Movie}</li>
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
                  </div>
                )
              } else return null
            })}
          </ul>
      </div>
    </div>
  );
}

export default MovieLists;