import React from 'react';
import { Route } from 'react-router-dom';
import MovieShow from './MovieShow';
import MoviesList from '../components/MovieList';
 
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a Movie from the list.</h3>
    )}/>
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow movies={movies} {...routerProps} /> }/>
  </div>
)
 
export default MoviesPage