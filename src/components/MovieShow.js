import React from 'react'

const MovieShow = ({match, movies}) => {
  return (
    <div id='movie-show'>
      <h3>{movies[match.params.movieId].title}</h3>
    </div>
  )
}

export default MovieShow
