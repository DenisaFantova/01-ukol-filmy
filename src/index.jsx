import React from 'react';
import { render } from 'react-dom';
import './style.css';

import {movies} from './movies.js';
import MovieList from './components/MovieList/MovieList';

import Header from './components/Header/Header.jsx';

const App = () => (
  <>
    <Header />
    <MovieList movies={movies}/>
  </>
);

render(<App />, document.querySelector('#app'));
