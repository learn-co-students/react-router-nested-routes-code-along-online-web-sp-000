import React from 'react';

const MovieShow = ({match, movies}) => {
    return (
        <div>
            <h3>{ movies[match.params.movieId].title }</h3>
            {/* Here, "movies" is an object in props. We also have the Router props, from which we've extracted "match", which contains "params". */}
        </div>
    );
}

export default MovieShow;