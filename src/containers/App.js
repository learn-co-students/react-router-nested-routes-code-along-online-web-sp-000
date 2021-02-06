import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import MoviesPage from './MoviesPage';

class App extends Component {

  state = {
    movies: {
      1: { id: 1, title: 'A River Runs Through It' },
      2: { id: 2, title: 'Se7en' },
      3: { id: 3, title: 'Inception' }
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
          {/* In second <Route>, when the path matches the URL, <Route> will call the function inside render and pass info about the route, which is not a function with a regular component prop */}
          {/* So if URL path matches /movies, renderProps is passed to the MoviesPage component as props. The spread operator creates props for each key inside the routerProps object. */}
        </div>
      </Router>
    );
  }
}

export default App;
