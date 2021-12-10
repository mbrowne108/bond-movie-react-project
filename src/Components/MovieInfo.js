import React from 'react';
import { Link, useParams } from "react-router-dom";

function MovieInfo({ movies, onUpdateMovie }) {
  const { id } = useParams()
  
  function handleWatched() {
    fetch(`http://localhost:3004/movies/${movies[id].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        watched: !movies[id].watched
      }),
    })
      .then(r => r.json())
      .then((updatedMovie) => onUpdateMovie(updatedMovie))
  }

  function handleWantToWatch() {
    fetch(`http://localhost:3004/movies/${movies[id].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        want_to_watch: !movies[id].want_to_watch
      }),
    })
      .then(r => r.json())
      .then((updatedMovie) => onUpdateMovie(updatedMovie))
  }

  return (
    <div className="info-card">
      <h2>{movies[id].movie} ({movies[id].year})</h2>
      <h5>Starring {movies[id].bond}</h5>
      <h5>Directed by {movies[id].director}</h5>
      <h5>Written by {movies[id].writer}</h5>
      <h5>Music by {movies[id].composer}</h5>
      <h5>Rotten Tomatoes Score: {movies[id].avg_user_rtn_tom * 10}%</h5>
      <button className="button" onClick={handleWatched}>Watched? {movies[id].watched ? '☑' : '☐'}</button>
      <button className="button" onClick={handleWantToWatch}>Want to Watch? {movies[id].want_to_watch ? '☑' : '☐'}</button><br/>
      {movies[id].Movie !== "Dr. No" ? <Link className="info-button" to={`/movies/${movies[id].id - 1}`}>Previous Movie</Link> : null}
      {movies[id].Movie !== "Spectre" ? <Link className="info-button" to={`/movies/${movies[id].id + 1}`}>Next Movie</Link> : null}
    </div>
  );
}

export default MovieInfo;