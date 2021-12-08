import React from 'react';
import { Link } from "react-router-dom";

function MovieCard(props) {
  function handleWatched() {
    fetch(`http://localhost:3004/movies/${props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Watched: !props.watched
      }),
    })
      .then(r => r.json())
      .then((updatedMovie) => props.onUpdateWatch(updatedMovie))
  }

  function handleWantToWatch() {
    fetch(`http://localhost:3004/movies/${props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Want_To_Watch: !props.wantToWatch
      }),
    })
      .then(r => r.json())
      .then((updatedMovie) => props.onUpdateWant(updatedMovie))
  }

  function onLink() {
    props.handleFilmPage(props.id)
  }

  return (
    <div className="card">
      <h4 onClick={onLink}><Link to={`/${props.id}`}>{props.title}</Link></h4>
      <p>{props.year}</p>
      <button className="button" onClick={handleWatched}>Watched? {props.watched ? '☑' : '☐'}</button>
      <button className="button" onClick={handleWantToWatch}>Want to Watch? {props.wantToWatch ? '☑' : '☐'}</button>
    </div>
  );
}

export default MovieCard;