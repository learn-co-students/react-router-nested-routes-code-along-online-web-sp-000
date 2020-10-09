import React from 'react';
 
// Here we add `match` to the arguments so we can access the path information 
// in `routerProps` that is passed from MoviesPage.js 
const MovieShow = ({match, movies}) => {
  return (
    <div>
      {/* // And here we access the `movieId` stored in match.params to render 
      // information about the selected movie */}
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  );
}
// we've got our movies as an object in props. We've also got our Router props - from which we've extracted match. Within the match object is params. In this case, we only have the one parameter, movieId, which we defined in MoviesPage. Combining info from these two props lets us access the specific movie whose key matches the movieId from the URL path, resulting in the correct movie title being displayed!
 
export default MovieShow;