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

      // React Router
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} />
        </div>
      </Router>

      );
    }
  }

export default App;

// App has some dummy movie data provided in state for us
// (normally, you would fetch this info.

// App also has Router wrapping everything inside the JSX code.
// All JSX wrapped within Router can use Routes, including the JSX from any child components.

// In this case, that is all of your components.

// NOTE:
// instead of the component prop, you're using render.
// the render={value} prop works very similarly to component,
// but instead of passing an entire component in, you pass a function that returns JSX.
// above, this means you can write JSX code directly, having the function return <div>Home</div>
// or, you can have the function return a component, like the second Route above.

// When rendering a component through a Route with the render prop,
// the function accepts an argument, routerProps.

// When the path matches the URL, the Route will call the function inside render
// and pass in the current information available able the route,
// including the URL path that caused the Route to render.

// This is not possible with the regular component prop on Routes as seen before.

// EXAMPLE:
// if the URL path matches /movies, the function inside render is called.
// the object that is passed in - routerProps - get passed in as props.
// using the spread operator ({...routerProps}) will result in the creation of props
// for each key present inside the routerProps object.
// this isn't vital but is a helpful way to pass many props in without too much code clutter.

// The component, MoviesPage, receives props from the Route that contain information on the route.

// In addition, you can also pass in other props, as seen with movies={this.state.movies}.
