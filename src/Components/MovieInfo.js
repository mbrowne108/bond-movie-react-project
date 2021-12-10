import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

function MovieInfo({onUpdateWatch, onUpdateWant}) {
  const [movie, setMovie] = useState([])
  const { id } = useParams()
  
  useEffect(() => {
    fetch(`http://localhost:3004/movies/${id}`)
      .then(r => r.json())
      .then(data => setMovie(data))
  },[id])

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
      .then((updatedMovie) => setMovie(updatedMovie))
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
      .then((updatedMovie) => setMovie(updatedMovie))
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
      {movie.Movie !== "Dr. No" ? <Link className="info-button" to={`/${movie.id - 1}`}>Previous Movie</Link> : null}
      {movie.Movie !== "Spectre" ? <Link className="info-button" to={`/${movie.id + 1}`}>Next Movie</Link> : null}
    </div>
  );
}

export default MovieInfo;