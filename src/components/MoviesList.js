// ./src/components/MoviesList.js
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
 
const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <Fragment>
        <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link><br/>
    </Fragment>
  );
 
  return (
    <div>
      {renderMovies}
    </div>
  );
};
 
export default MoviesList;