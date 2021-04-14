import React from 'react';
 

const MovieShow = ({match, location, history, movies}) => {
    return (
      <div>
              {console.log(match)}
    {console.log(location)}
    {console.log(history)}
        <h3>{ movies[match.params.movieId].title }</h3>
      </div>
    );
  }
 
export default MovieShow;