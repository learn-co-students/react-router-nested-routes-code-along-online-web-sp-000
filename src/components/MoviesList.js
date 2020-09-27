// ./src/components/MoviesList.js
import React from 'react';
import { Link } from 'react-router-dom';
 
//in the link used interpolation to create a dynamic path
const MoviesList = ({ movies }) => {
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

//render links for each movie 
//movies prop passed from app to moviespage
//then again to movieslist 