import React from 'react';
import { Link } from 'react-router-dom';
 
const MoviesList = ({ movies }) => {
    
  const renderMovies = Object.keys(movies).map(movieID =>
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  );
 //this to={`/movies/${movieID}` is basically an "a" tag (a href)
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;