import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieId =>
    <p><Link key={movieId} to={`/movies/${movieId}`}>{movies[movieId].title}</Link></p>
  );

  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;
