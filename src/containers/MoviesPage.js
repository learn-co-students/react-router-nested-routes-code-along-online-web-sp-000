// // .src/containers/MoviesPage.js
// import React from 'react';
// import { Route } from 'react-router-dom';
// import MoviesList from '../components/MoviesList';
// import MovieShow from '.../components/MovieShow';


// // Here we add `match` to the arguments so we can access the path information in `routerProps` that is passed from App.js 
// // Using match, we can show stuff depending on what the match.url returns
// // We do this because we want the Route inside MoviesPage to match the exact URL that caused MoviesPage to render, plus :movieId
// // :movieId represents a parameter. If we visit http://localhost:3000/movies/1, the movieId parameter would be "1"
// const MoviesPage = ({ match, movies }) => (
//   <div>
//     <MoviesList movies={movies} />
//     // Adding code to show a message to the user to select a movie if they haven't yet
//     <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>}/>
//     {/* We also add a `Route` component that will render `MovieShow` when a movie is selected */}
//     <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/>
//   </div>
// );
// // when we click a Link to a movie, it adds that movie's id to the URL as a parameter. We need to get that parameter out of the URL and into MovieShow
// //  by using a Route's render prop, we can pass in a function that has access to information about the route itself. 
// //  all the key/value pairs within routerProps are also passed into MovieShow as props.
// //  one of the props we receive from the Route is match and match contains all the parameters from the URL! 
// //  These parameters are stored as key/value pairs in match.params
// // The key corresponds to whatever we named the parameter in our Route, so in this case, the parameter will be movieId

// export default MoviesPage

import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';
 
const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>}/>
    <Route path={`${match.url}/:movieId`} render={routerProps => <MovieShow {...routerProps} movies={movies} /> }/>
  </div>
)
 
export default MoviesPage

