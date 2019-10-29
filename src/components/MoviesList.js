import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies}) => {
  const renderMovies = Object.keys(movies).map(movieId =>
    <li><Link key={movieId} to={`/movies/${movieId}`}>{movies[movieId].title}</Link></li>
  );

  return (
    <div>
      <ul>
        {renderMovies}
      </ul>
    </div>
  );
}
 
export default MoviesList;