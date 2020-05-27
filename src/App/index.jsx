import React from 'react';
import Homepage from '../pages/Homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieDetails from '../pages/Details';
import Header from '../components/Header';
import MovieList from '../pages/List';
import Search from '../pages/Search';
import Discover from '../pages/Discover';
import ErrorPage from '../pages/ErrorPage';
import './style.css';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/movie/:id" component={MovieDetails} />
      <Route exact path="/discover" component={Discover} />
      <Route exact path="/search" component={Search} />
      <Route path="/404" component={ErrorPage} />
      <Route exact path="/:endpoint" component={MovieList} />
    </Switch>
  </Router>
);

export default App;
