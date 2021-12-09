import React from 'react';
import { Link } from "react-router-dom";

function MovieInfo({movie, handleFilmPage, onUpdateWatch, onUpdateWant}) {
  function onNextLink() {
    handleFilmPage(movie.id + 1)
  }

  function onPreviousLink() {
    handleFilmPage(movie.id - 1)
  }

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
    <div className="info-card">
      <h2>{movie.Movie} ({movie.Year})</h2>
      <h5>Starring {movie.Bond}</h5>
      <h5>Directed by {movie.Director}</h5>
      <h5>Written by {movie.Writer}</h5>
      <h5>Music by {movie.Composer}</h5>
      <h5>Rotten Tomatoes Score: {movie.Avg_User_Rtn_Tom * 10}%</h5>
      <button className="button" onClick={handleWatched}>Watched? {movie.Watched ? '☑' : '☐'}</button>
      <button className="button" onClick={handleWantToWatch}>Want to Watch? {movie.Want_To_Watch ? '☑' : '☐'}</button><br/>
      {movie.Movie !== "Dr. No" ? <Link className="info-button" onClick={onPreviousLink} to={`/${movie.id - 1}`}>Previous Movie</Link> : null}
      {movie.Movie !== "Spectre" ? <Link className="info-button" onClick={onNextLink} to={`/${movie.id + 1}`}>Next Movie</Link> : null}
    </div>
  );
}

export default MovieInfo;