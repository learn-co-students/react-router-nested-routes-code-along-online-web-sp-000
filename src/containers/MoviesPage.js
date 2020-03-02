// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';

const MoviesPage = ({ match, movies }) => {
    return (
    <div>
        <MoviesList movies={movies} />
        // <Route path={`${match.url}/:movieId`} component={MovieShow} />
        // <Route path={`${match.url}/:movieId`} component={<MovieShow movies={movies} /> }/>

        // refactor:
        <Route exact path={match.url} render={() => <h3>Choose a movie from the list above</h3>} />

        <Route path={`${match.url}/:movieId`} render={ routerProps => <MovieShow {...routerProps} movies={movies} /> } />
    </div>
    )
}

export default MoviesPage

// The MoviesPage component is responsible for loading the MoviesList component
// and passing in the movies received from App.

// This component started purely presentational.

// It is simply the middle component btwn App and MovieList.

// import MovieShow and add a nested route to display the MovieShow container
// if that route matches /movies/:movieId.

// Above, you've imported MovieShow and added a Route component.

// You will notice that you are now inheriting match from this.props.
// This comes from the `routerProps` passed in from App.

// This is a POJO (plain old Javascript object) that contains the current URL.

// Using `match`, you can show stuff depending on what the match.url returns,
// b/c you want the Route inside MoviesPage to match the exact URL that caused MoviesPage to render,
// plus :movieId which represents a parameter.

// If you visit http://localhost:3000/movies/1, the movieId parameter would be "1".

// The data you want to display on a particular MovieShow page is available here - in its parent - as props.

// For the MovieShow component to display this content, make your movies collection available within MovieShow.

// MovieShow now has all the movies, but it doesn't know which movie it should display.

// This information is only available from the URL.

// Remember: when you click a Link to a movie, it adds that movie's id to the URL as a parameter.

// You need to get that parameter out of the URL and into MovieShow.

// inserted refactor in line 13.

// By using a Route's render prop, you can pass in a function that has access to information about the route itself.

// Now, all the key/value pairs within routerProps are also passed into MovieShow as props.

// Just like before, one of the props received from the Route is `match`
// which contains all the parameters from the URL!

// These parameters are stored as key/value pairs in `match.params`

// The `key `corresponds to whatever you named the parameter in your <Route /> - in this case - the parameter will movieId.

// Update MovieShow to utilize this parameter in conjunction with the movies data that was passed down.
