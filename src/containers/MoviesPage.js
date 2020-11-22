// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    no tests on this i'll do tommorow but submit now 
  </div>
)

export default MoviesPage
