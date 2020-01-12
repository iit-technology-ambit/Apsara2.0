import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import 'assets/scss/material-kit-react.scss?v=1.8.0';

// pages for this product
import Components from 'views/Components/Components.js';
import Navbar from 'views/Components/Navbar.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import Stories from 'views/Archive/Archive.js';
import Team from 'views/Team/Team.js';
import Issues from 'views/Stories/Stories.js';
import NewsletterPage from 'views/Newsletter/NewsletterPage.js';
import ReadingPage from 'views/ReadingPage/ReadingPage.js';
import MobileFooter from 'views/Components/MobileFooter.js';
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div>
      {/* <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} /> */}
      <Route path='/' component={Navbar} />
      <Route path='/newsletter' component={NewsletterPage} />
      <Route path='/stories' component={Stories} />
      <Route path='/team' component={Team} />
      <Route path='/archive' component={Issues} />
      <Route path='/article' component={ReadingPage} />
      <Route exact path='/' component={Components} />
      {/* <Route path='/' component={Footer} /> */}
    </div>
  </Router>,
  document.getElementById('root')
);
