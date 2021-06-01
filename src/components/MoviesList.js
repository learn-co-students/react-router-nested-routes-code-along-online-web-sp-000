import React from 'react'
import {Link} from "react-router-dom";

const MoviesList = ({ movies }) => {
    const renderMovies = Object.keys(movies).map(id =>
        <li key={`list-movie-${id}`}><Link key={id} to={`/movies/${id}`}>{movies[id].title}</Link></li>
    )

    return (
        <React.Fragment>
            <ul className='movie-list'>{renderMovies}</ul>
        </React.Fragment>
    )
}
export default MoviesList