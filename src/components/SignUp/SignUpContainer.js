import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindPromiseCreators } from 'redux-saga-routines';
import SignUp from './SignUp';
import {
  signUpPromiseCreator as signUp,
  getCurrentProfilePromiseCreator as getCurrentProfile,
  getSchoolsPromiseCreator as getSchools,
  getTeamsPromiseCreator as getTeams,
  getFacilitiesPromiseCreator as getFacilities,
} from '../../store/routines/routines';

class SignUpContainer extends React.Component {
    
  signUp = async (v) => {
    const {signUp, getCurrentProfile, getSchools, getTeams, getFacilities } = this.props;
    const role = 'player';

    try {
      await signUp({...v, role})
      await getCurrentProfile();
      await getSchools()
      await getTeams()
      await getFacilities()
    }catch(e) {
      console.log(e)
    }   
  }

  render() {
    return (
      <SignUp signUp={this.signUp} />
    );
  }
}

SignUpContainer.propTypes = {
  signUp: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  getSchools: PropTypes.func.isRequired,
  getTeams: PropTypes.func.isRequired,
  getFacilities: PropTypes.func.isRequired,
};

const mapDispathToProps = (dispatch) => bindPromiseCreators({
  signUp,
  getCurrentProfile,
  getSchools,
  getTeams,
  getFacilities,
}, dispatch);

export default connect(null, mapDispathToProps)(SignUpContainer);
