import React from 'react';

// const MovieShow = props => {
const MovieShow = ({match, movies}) => {

    return (
    <div>
        // <h3>Movies Show Component!</h3>

        // refactor
        <h3>{ movies[match.params.movieId].title }</h3>
    </div>
    );
}

export default MovieShow;

// You've added a nested route within `MoviesPage` so that going to '/movies/:movieId'
// will display details about a given movie using this component.

// The data you want to display on a particular MovieShow page is available in MoviesPage - its parent - as props.

// For MovieShow to display this content, make your movies collection available within MovieShow.

// inserted refactor line 8

// You've got your movies as an object in props.

// You've also got your Router props - from which you've extracted `match`.

// Within the match object is `params`. In this case, you only have the one parameter, `movieId`,
// which is defined in MoviesPage.

// Combining info from these two props allows access to the specific movie
// whose key matches the movieId from the URL path, resulting in the correct movie title being displayed!

// You've succeeded in creating a "Master-Detail" interface -
// the list of movies is always present when viewing a particular movie's details.

// Clicking through the links changes the URL.

// With this setup, users of this site could bookmark or share the URL for a specific movie!
