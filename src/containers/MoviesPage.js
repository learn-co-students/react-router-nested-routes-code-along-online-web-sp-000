// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';

const MoviesPage = ({ match, movies }) => (
  // "match" is added to the arguments so we can access the path information in 'routerProps' that is passed from App.js

  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() =>
      <h3>Choose a movie from the list above</h3> } />
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow{...routerProps} movies={movies} /> }/>

  </div>
)

export default MoviesPage
