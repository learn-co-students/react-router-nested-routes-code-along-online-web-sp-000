import React from 'react';
import { matchPath } from 'react-router-dom';

const MovieShow = ({match, movies}) => {
    return (
        <div>
            <h3>{ movies[match.params.movieId].title }</h3>
        </div>
    );
};

export default MovieShow;