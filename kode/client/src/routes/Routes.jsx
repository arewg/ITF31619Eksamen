/**
 * Routes er basert på Marius Wallins' forelesning 'Leksjon 11' og er blitt modifisert for eksamen.
 */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import AuthProvider from '../contexts/AuthProvider.jsx';

import Home from '../pages/Home.jsx';
import ArticleView from '../pages/ArticleView.jsx';
import Offices from '../pages/Offices.jsx';
import SingleOffice from '../pages/SingleOffice.jsx';
import Contact from '../pages/Contact.jsx';
import NewArticle from '../pages/NewArticle.jsx';
import SingleArticle from '../pages/SingleArticle.jsx';
import Login from '../pages/Login.jsx';
import UpdateArticle from '../pages/UpdateArticle.jsx';
import Register from '../pages/Register.jsx';
import Report from '../pages/Report.jsx';
import Superadmin from '../pages/Superadmin.jsx';
import NoMatch from '../components/NoMatch.jsx';

const Routes = () => (
  <Router>
    <AuthProvider>
        <MainLayout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/kontorer">
              <Offices />
            </Route>
            <Route exact path="/kontorer/*">
              <SingleOffice />
            </Route>
            <Route exact path="/kontakt">
              <Contact />
            </Route>
            <Route exact path="/fagartikler">
              <ArticleView />
            </Route>
            <Route exact path="/fagartikler/oppdater/:id">
              <UpdateArticle />
            </Route>
            <Route exact path="/fagartikler/nyartikkel">
              <NewArticle />
            </Route>
            <Route exact path="/fagartikler/:id">
              <SingleArticle />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/report">
                <Report />
            </Route>
            <Route exact path="/superadmin">
              <Superadmin />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </MainLayout>
    </AuthProvider>
  </Router>
);
export default Routes;
