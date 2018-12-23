import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Preview from './Preview';
import Help from './Help';
import NotFoundPage from './shared/NotFoundPage';
import Page from './shared/Page';
import './App.css';
import HomePage from "./shared/HomePage";

const App = (props) => (
  <Router>
    <Switch>
        <Route exact path="/" render={routeProps => <HomePage {...routeProps} prismicCtx={props.prismicCtx} />} />
        <Route exact path="/page/:uid" render={routeProps => <Page {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default App;
