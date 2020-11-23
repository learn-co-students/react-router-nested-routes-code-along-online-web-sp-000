import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = (props) => {
    const renderMovies = Object.keys(props.movies).map( mId => (
        <Link key={mId}
                to={`/movies/${mId}`}>
                {props.movies[mId].title}       |
        </Link>)
        )

    return(
        <div>
        {renderMovies}
        </div>
    )
}



export default MoviesList