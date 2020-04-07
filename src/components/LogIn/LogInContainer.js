import React from 'react';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import LogIn from './LogIn';
import {
  signInProfilePromiseCreator as signIn,
  getCurrentProfilePromiseCreator as getCurrentProfile,
  getSchoolsPromiseCreator as getSchools,
  getTeamsPromiseCreator as getTeams,
  getFacilitiesPromiseCreator as getFacilities,
} from '../../store/routines/routines';

class LogInContainer extends React.Component {

  signIn = async (v) => {
    const {signIn, getCurrentProfile, getSchools, getTeams, getFacilities, history} = this.props;

    try {
      await signIn(v);
      await getCurrentProfile();
      await getSchools()
      await getTeams()
      await getFacilities()
      history.push('/profile')
    } catch (e) {
        console.log(e);
      }
  }

  saveEmail = (v) => {
    console.log(v.target.value)
  }

  render() {
    return (
      <LogIn signIn={this.signIn} saveEmail={this.saveEmail} />
    );
  }
}

const mapDispatchToProps = (dispatch) => bindPromiseCreators({
  signIn,
  getCurrentProfile,
  getSchools,
  getTeams,
  getFacilities,
}, dispatch);

export default connect(null, mapDispatchToProps)(LogInContainer);
