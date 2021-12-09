import React from 'react';
import { Link, useParams } from "react-router-dom";

function MovieInfo({movies, onUpdateWatch, onUpdateWant}) {
  const params = useParams()
  
  function handleWatched() {
    fetch(`http://localhost:3004/movies/${movies[params.id].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Watched: !movies[params.id].Watched
      }),
    })
      .then(r => r.json())
      .then((updatedMovie) => onUpdateWatch(updatedMovie))
  }

  function handleWantToWatch() {
    fetch(`http://localhost:3004/movies/${movies[params.id].id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Want_To_Watch: !movies[params.id].Want_To_Watch
      }),
    })
      .then(r => r.json())
      .then((updatedMovie) => onUpdateWant(updatedMovie))
  }

  return (
    <div className="info-card">
      <h2>{movies[params.id].Movie} ({movies[params.id].Year})</h2>
      <h5>Starring {movies[params.id].Bond}</h5>
      <h5>Directed by {movies[params.id].Director}</h5>
      <h5>Written by {movies[params.id].Writer}</h5>
      <h5>Music by {movies[params.id].Composer}</h5>
      <h5>Rotten Tomatoes Score: {movies[params.id].Avg_User_Rtn_Tom * 10}%</h5>
      <button className="button" onClick={handleWatched}>Watched? {movies[params.id].Watched ? '☑' : '☐'}</button>
      <button className="button" onClick={handleWantToWatch}>Want to Watch? {movies[params.id].Want_To_Watch ? '☑' : '☐'}</button><br/>
      {movies[params.id].Movie !== "Dr. No" ? <Link className="info-button" onClick={() => params.id - 1} to={`/${movies[params.id].id - 1}`}>Previous Movie</Link> : null}
      {movies[params.id].Movie !== "Spectre" ? <Link className="info-button" onClick={() => params.id + 1} to={`/${movies[params.id].id + 1}`}>Next Movie</Link> : null}
    </div>
  );
}

export default MovieInfo;