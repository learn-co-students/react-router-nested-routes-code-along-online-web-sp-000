import React from 'react';
 
//add match to arguments to access path info (URL params)
//match exists from the routerProps in MoviesPage
const MovieShow = ({match, movies}) => {
 
  return (
    <div>
        {/* //acess movieId in match.params to render info about selected movie  */}
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  );
}
 
export default MovieShow;