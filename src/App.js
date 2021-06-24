
import './App.css';

import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
//import AuthorsView from './views/AuthorsView';
import SearchMovie from './pages/SearchMovie';
//import NotFoundView from './views/NotFoundView';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => (
  <>
    <ul>
      <li>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/movies" component={SearchMovie} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      {/* <Route component={NotFoundView} /> */}
    </Switch>
  </>
);

export default App;
