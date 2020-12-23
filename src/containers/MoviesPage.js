// .src/containers/MoviesPage.js
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


//Summary
// To briefly review - we are able to nest Routes within each other. Using the Router props we receive from the top-level Route, we can nest a second Route that extends the URL path of the first. We can actually nest Routes as many times as we would like, so if we wanted, we could go fully RESTful and create nested Routes inside MovieShow as well, allowing us to write URL paths that would look something like this:

// http://localhost:3000/movies/:movieId/edit
// To get nested Routes to work, we need to utilize route information that is stored in the match props. match contains both the current URL path in match.url, as well as any parameters in match.params. We define the parameter names in a Route's path by prepending a colon (:) to the front of the name. This name will then show up as a key inside match.params.

// We can use parameters to look up specific data - in this case matching the key of a movies object with the URL parameter, :movieId, allowed us to display a particular movie's title.

// Nesting routes enables us to build single-page applications in React that behave like they have many pages. We can also load up and display specific data dynamically.

// In the early days of the internet, we would have had to create separate HTML pages for each movie in this application. Now, with React, we can write abstract components that fill in the data for each 'page' on demand. Very cool!