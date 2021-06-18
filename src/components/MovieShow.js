import React from 'react';
 
// const MovieShow = props => {
 
//   return (
//     <div>
//       <h3>Movies Show Component!</h3>
//     </div>
//   );
// }


const MovieShow = ({match, movies}) => {
  return (
    <div>

      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  );
}
 

 
export default MovieShow;
