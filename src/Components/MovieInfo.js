import React from 'react';

function MovieInfo({movie}) {
  return (
    <div className="info-card">
      <h2>{movie.Movie} ({movie.Year})</h2>
      <h5>Starring {movie.Bond}</h5>
      <h5>Directed by {movie.Director}</h5>
      <h5>Written by {movie.Writer}</h5>
      <h5>Music by {movie.Composer}</h5>
      <h5>Rotten Tomatoes Score: {movie.Avg_User_Rtn_Tom * 10}%</h5>
    </div>
  );
}

export default MovieInfo;