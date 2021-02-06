import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    const renderMovies = Object.keys(movies).map(movieID => <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
    );
    // Here, movies is being passed in as a prop and is an object containing each movie. We map over this object and get an array of keys from that object. Then we map over that new array of keys, which are also the id values for each movie (i.e. "movieID").
    // When 'movies' is mapped, our <Link>s are each getting a unique path in the to={...} attribute since each movieID is different.

    return (
        <div>
            {renderMovies}
        </div>
    );
};

export default MoviesList;