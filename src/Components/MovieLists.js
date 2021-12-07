import React from 'react';

function MovieLists({movies}) {
  return (
    <div>
      <h2>Your Movie Lists</h2>
      <div className="lists">
        <h3>Have Seen</h3>
          <ul>
            {movies.map((movie) => {
              if (movie.Watched) {
                return <li>{movie.Movie}</li>
              } else return null
            })}
          </ul>
      </div>
      <div className="lists">
        <h3>Want To See</h3>
          <ul>
            {movies.map((movie) => {
              if (movie.Want_To_Watch) {
                return <li>{movie.Movie}</li>
              } else return null
            })}
          </ul>
      </div>
     
    </div>
  );
}

export default MovieLists;