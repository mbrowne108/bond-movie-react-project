import React from 'react';
import { Link } from "react-router-dom";

function MovieInfo({movie, handleFilmPage}) {
  function onNextLink() {
    handleFilmPage(movie.id + 1)
  }

  function onPreviousLink() {
    handleFilmPage(movie.id - 1)
  }

  return (
    <div className="info-card">
      <h2>{movie.Movie} ({movie.Year})</h2>
      <h5>Starring {movie.Bond}</h5>
      <h5>Directed by {movie.Director}</h5>
      <h5>Written by {movie.Writer}</h5>
      <h5>Music by {movie.Composer}</h5>
      <h5>Rotten Tomatoes Score: {movie.Avg_User_Rtn_Tom * 10}%</h5>
      {movie.Movie !== "Dr. No" ? <Link className="info-button" onClick={onPreviousLink} to={`/${movie.id - 1}`}>Previous Movie</Link> : null}
      {movie.Movie !== "Spectre" ? <Link className="info-button" onClick={onNextLink} to={`/${movie.id + 1}`}>Next Movie</Link> : null}
    </div>
  );
}

export default MovieInfo;