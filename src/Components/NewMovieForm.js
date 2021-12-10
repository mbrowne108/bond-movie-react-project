import React, {useState} from 'react';

function NewMovieForm({onNewMovie}) {
  const [formData, setFormData] = useState({
      movie: "",
      year: 2021,
      bond: "",
      director: "",
      writer: "",
      composer: "",
      avg_user_rtn_tom: 6.4,
      watched: false,
      want_to_watch: false
  })

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function formSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3004/movies/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
      .then(r => r.json())
      .then((newMovie) => onNewMovie(newMovie))
  }

  return (
    <div className="info-card">
      <h2>Create your dream Bond movie!</h2>
      <form onSubmit={formSubmit}>
          <label>Title <input type="text" name="movie" value={formData.movie} onChange={handleChange}/></label><br/>
          <label>Starring <input type="text" name="bond" value={formData.bond} onChange={handleChange}/></label><br/>
          <label>Directed By <input type="text" name="director" value={formData.director} onChange={handleChange}/></label><br/>
          <label>Written By <input type="text" name="writer" value={formData.writer} onChange={handleChange}/></label><br/>
          <label>Music By<input type="text" name="composer" value={formData.composer} onChange={handleChange}/></label><br/>
          <input type="submit" value="submit"/>
      </form>
    </div>
  );
}

export default NewMovieForm;