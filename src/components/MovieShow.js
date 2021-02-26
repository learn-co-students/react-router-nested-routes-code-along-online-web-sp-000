import React from 'react';

const MovieShow = ({match, movies}) => {
    const movie = movies[match.params.movieId]
    return (
        <div>
            <h3>{ movie.title }</h3>
        </div>
    )
}

export default MovieShow