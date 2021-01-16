import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
// import the `MovieShow` component:
import MovieShow from '../components/MovieShow';
 
// Here we add `match` to the arguments so we can access the path information 
// in `routerProps` that is passed from App.js 
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    // We also add a `Route` component that will render `MovieShow`
    // when a movie is selected
    <Route path={`${match.url}/:movieId`} component={MovieShow}/>
  </div>
)
 
export default MoviesPage
