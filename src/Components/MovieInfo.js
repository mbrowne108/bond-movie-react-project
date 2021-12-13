import React from 'react';
import { Link, useParams } from "react-router-dom";

function MovieInfo({ movies, onUpdateMovie }) {
  const { id } = useParams()
  
  function handleUpdate(e) {
    fetch(`http://localhost:3004/movies/${movies[id].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        [e.target.name]: !movies[id][e.target.name]
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
      <button className="button" name="watched" onClick={handleUpdate}>Watched? {movies[id].watched ? '☑' : '☐'}</button>
      <button className="button" name="want_to_watch" onClick={handleUpdate}>Want to Watch? {movies[id].want_to_watch ? '☑' : '☐'}</button><br/>
      {movies[id].movie !== "Dr. No" ? <Link className="info-button" to={`/movies/${movies[id].id - 1}`}>Previous Movie</Link> : null}
      {movies[id].id + 1 !== movies.length ? <Link className="info-button" to={`/movies/${movies[id].id + 1}`}>Next Movie</Link> : null}
    </div>
  );
}

export default MovieInfo;