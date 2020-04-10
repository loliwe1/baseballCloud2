import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import '../css/style.css';
import Profile from '../components/Profile';
import LeaderBoards from '../components/LeaderBoards';
import Network from '../components/Network';
import TopNavContainer from '../components/TopNav/TopNavContainer';
import FooterNav from '../components/FooterNav/FooterNav';
import SignUpContainer from '../components/SignUp/SignUpContainer';
import LogInContainer from '../components/LogIn/LogInContainer';

const Navigation = ({ user }) => (
  <Router history={createBrowserHistory()}>
    {user && <TopNavContainer />}
    {user ?
      (
        <Switch>
          <Route path="/network" component={Network} />
          <Route path="/leaderboards" component={LeaderBoards} />
          <Route path="/profile" component={Profile} />
          <Route path="/signUp" component={SignUpContainer} />
          <Route path="/logIn" component={LogInContainer} />
          <Redirect to="/profile" />
        </Switch>
      )
      :
      (
        <Switch>
          <Route path="/signUp" component={SignUpContainer} />
          <Route path="/logIn" component={LogInContainer} />
          <Redirect to="/logIn" />
        </Switch>
      )}
    <FooterNav />
  </Router>
);

Navigation.propTypes = {
  user: PropTypes.string.isRequired,
};
export default Navigation;
