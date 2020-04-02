import React from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import './css/style.css';
import Profile from './components/Profile/';
import LeaderBoards from './components/LeaderBoards';
import Network from './components/Network';
import TopNavContainer from './components/TopNav/TopNavContainer';
import FooterNav from './components/FooterNav/FooterNav';
import SignUpContainer from './components/SignUp/SignUpContainer';
import LogInContainer from './components/LogIn/LogInContainer';


function App({user}) {
  return (
   <div className='main'>
   { localStorage.getItem('headers') ? 
     <Router history={createBrowserHistory()}>
        <TopNavContainer/>
        <Switch>
          <Route path="/network">
            <Network />
          </Route>
          <Route path="/leaderboards">
            <LeaderBoards />
          </Route>
          <Route path="/profile" render = { props =>  <Profile {...props}/> }/>
          <Redirect to='/profile'/>
        </Switch>
        <FooterNav/>
      </Router>
     :
     <Router>
      <Switch>
        <Route path="/signUp">
          <SignUpContainer/>
        </Route>
        <Route path="/logIn">
          <LogInContainer />
        </Route> 
        <Redirect to="/logIn" />
      </Switch>
      <FooterNav/>
    </Router>
  }
   </div>
  );
}


const mapStateToProps = (state) => ({
  user: state.user,
});


export default connect(mapStateToProps)(App);