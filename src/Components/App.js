import React from 'react';

import MovieContainer from './MovieContainer.js'
import NavBar from './NavBar.js'

function App() {
  return (
    <div>
      <header id="header">
        <h1>James Bond Movie List</h1>
        <NavBar />
        <MovieContainer />
      </header>
    </div>
  );
}

export default App;
