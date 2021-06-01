import React from 'react';

const MovieEdit = ({match, movie}) => {
    return (
        <React.Fragment>
            <h2>Editing {movie.title}</h2>
        </React.Fragment>
    );
}

export default MovieEdit;