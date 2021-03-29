import React from 'react'
import { Link } from 'react-router-dom'

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <p key={movieID} ><Link to={`/movies/${movieID}`}>{movies[movieID].title}</Link></p>
  )

  return (
    <div id='movies-list'>{renderMovies}</div>
  )
}

export default MoviesList
