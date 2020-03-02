import React from 'react';
import { Link } from 'react-router-dom';

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

// The movies prop has been passed from App to MoviesPage, then again to MoviesList.

// To make the code a little simpler, you've used object destructuring
// to get to movies directly - rather than have to write props.movies in multiple places.

// The movies prop is an object containing each movie.

// To iterate over this object, you'll use Object.keys(movies) to get an array of keys, then map over this array.

// Since the keys in the object are also the id values for each movie,
// the elements in .map() are referred to as movieID.

// You can use movieID directly in some of the attributes like key,
// but also use it to get information from the movies object, as you see with movies[movieID].title.

// In the Link, you've also used interpolation to create a dynamic path:
// to={`/movies/${movieID}`}

// If a user goes to the /movies route, MoviesList will render a list of clickable router links.

// Clicking on one of the movie names will cause the URL to display that movie's id.

// When movies is mapped, your Links are each getting a unique path in the to={...} attribute, since each movieID is different.
