import React from 'react';
import { Link } from 'react-router-dom';

// The movies prop has been passed from App to MoviesPage, then again to MoviesList
//Here we are using object destructuring 
 
const MoviesList = ({ movies }) => {
    // map over movies object to get movieID and then create a link path through "to" using interpolation 
  const renderMovies = Object.keys(movies).map(movieID =>
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;