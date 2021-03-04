// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
// import the `MovieShow` component:
import MovieShow from '../components/MovieShow';
 
// Here we add `match` to the arguments so we can access the path information (params from the URL)
// in `routerProps` that is passed from App.js 
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    {/* //adding code to show a message if no movie is selected  //creates a default Route */}
    <Route exact path={match.url} 
    render={() => <h3>Choose a movie from the list above</h3>}/>
    {/* // We also add a nested `Route` component that will render `MovieShow`
    // when a movie is selected */}
    <Route path={`${match.url}/:movieId`} 
    //pass movies to MovieShow component using render prop so we can pass in a function that has access to information about the route itself. Now MovieShow has access to all key/value pairs. 
    render={routerProps => 
      < MovieShow {...routerProps} movies={movies} /> }/>
  </div>
)
 
export default MoviesPage
