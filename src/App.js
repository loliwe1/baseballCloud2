import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './css/style.css';
import Profile from './components/Profile';
import LeaderBoards from './components/LeaderBoards';
import Network from './components/Network';
import TopNavContainer from './components/TopNav/TopNavContainer';
import FooterNav from './components/FooterNav/FooterNav';
import SignUpContainer from './components/SignUp/SignUpContainer';
import LogInContainer from './components/LogIn/LogInContainer';


function App({ user }) {
  return (
    <div className="main">
      <Router history={createBrowserHistory()}>
        {user && <TopNavContainer />}
        {user ?
          (
            <Switch>
              <Route path="/network" component={Network} />
              <Route path="/leaderboards" component={LeaderBoards} />
              <Route path="/profile" render={(props) => <Profile {...props} />} />
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
    </div>
  );
}

App.propTypes = {
  user: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  user: state.user.profId,
});


export default connect(mapStateToProps)(App);
