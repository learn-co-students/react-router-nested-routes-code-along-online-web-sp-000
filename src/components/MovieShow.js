import React from 'react';

    const MovieShow = (props) =>{
        
    const {match, movies} = props

     return (
        <div>
        <h3>{movies[match.params.mId].title}</h3>
        
        </div>
     )


    }

export default MovieShow