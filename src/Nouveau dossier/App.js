
import { useEffect, useState } from 'react';
import {moviesliste} from './Components/MovieListe'
import MovieCards from './Components/MovieCard';
import React from 'react';
import './App.css';

function App() {
  const [moviescard, setMoviesCard] = useState(moviesliste);
  return (
    <div className="App">
  <MovieCards 
   moviescard={moviescard}
    />
    </div>
  );
}

export default App;
