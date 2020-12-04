//Oblig 6 / leksjon 11
import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import NoMatch from '../components/NoMatch.jsx';
import Home from '../pages/Home.jsx';
import TitleProvider from '../contexts/TitleProvider.jsx';
import ArticleView from '../pages/ArticleView.jsx';
import Offices from '../pages/Offices.jsx';
import SingleOffice from '../pages/SingleOffice.jsx'
import Contact from '../pages/Contact.jsx';
import NewArticle from '../pages/NewArticle.jsx';
import SingleArticle from '../pages/SingleArticle.jsx';




const Routes = () => (
  <Router>
      <TitleProvider>
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
            <Route exact path="/fagartikler/nyartikkel">
                <NewArticle />
            </Route>
            <Route exact path="/fagartikler/:id">
                <SingleArticle />
            </Route>
            <Route path="*">
                <NoMatch />
            </Route>
            </Switch>
        </MainLayout>
      </TitleProvider>
  </Router>
  )
export default Routes;
