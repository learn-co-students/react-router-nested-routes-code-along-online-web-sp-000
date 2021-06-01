import React from 'react';
import {Link, Route} from "react-router-dom";
import MovieEdit from "./MovieEdit";

const MovieShow = ({match, movies}) => {
    return (
        <div className='movie'>
            <Route exact path={match.url} render={() => {
                return (
                    <React.Fragment>
                        <h3>{movies[match.params.movieID].title}</h3>
                        <Link to={`${match.url}/edit`}>Edit</Link>
                    </React.Fragment>
                )
            }}/>
            <Route path={`${match.url}/edit`} render={e => <MovieEdit {...e} movie={movies[match.params.movieID]}/>}/>
        </div>
    );
}

export default MovieShow;