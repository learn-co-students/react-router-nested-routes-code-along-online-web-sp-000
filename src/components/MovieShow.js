import React from 'react';

const MovieShow = props => {
  const movieId  = props.match.params.movieId;
  console.log(props.match)
  // find in props.movies object the key-value pair with the right id and print its info
  return (
    <div>
      <h3>Movies Show Component!</h3>

    </div>
  );
}

export default MovieShow;
