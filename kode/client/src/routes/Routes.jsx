//Oblig 6 / leksjon 11
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import NoMatch from '../components/NoMatch.jsx';
import Home from '../pages/Home.jsx';


const Routes = () => (
  <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </MainLayout>
  </Router>
);

export default Routes;
